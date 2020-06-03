#!/bin/bash

export NODE_ENV="production"

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

yarn parcel-build
yarn build

echo "$HEAD" > ./.data/generated_with

echo "Rebuild done"
