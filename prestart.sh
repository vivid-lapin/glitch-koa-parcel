#!/bin/bash

export NODE_ENV="production"
export NODE_OPTIONS="--max_old_space_size=256"

GENERATED_WITH=`cat ./.data/generated_with`
HEAD=`git rev-parse HEAD`

if [[ $GENERATED_WITH = $HEAD ]]; then
    echo "Already up-to-date"
    exit 0
fi

echo "Rebuild"
echo "GENERATED_WITH: $GENERATED_WITH"
echo "HEAD: $HEAD"

rm -rf .data/{dist,public}

if [[ ${GITHUB_TOKEN} && ${GITHUB_REPO} ]]; then
    curl -s -S -H "Authorization: token ${GITHUB_TOKEN}" https://api.github.com/repos/${GITHUB_REPO}/actions/artifacts > /tmp/artifacts.json
    ARCHIVE_URL=`cat /tmp/artifacts.json | jq -r ".artifacts | .[0] | .archive_download_url"`
    curl -s -L -H "Authorization: token ${GITHUB_TOKEN}" "${ARCHIVE_URL}" -o /tmp/prebuilt-dist.zip
    unzip -d .data -u /tmp/prebuilt-dist.zip
else 
    yarn build
    yarn parcel-build
fi


echo "$HEAD" > ./.data/generated_with

echo "Rebuild done"
