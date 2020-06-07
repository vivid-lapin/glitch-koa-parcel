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

yarn build
yarn parcel-build &

echo "$HEAD" > ./.data/generated_with

echo "Rebuild done"
