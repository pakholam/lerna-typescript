#!/usr/bin/env sh

yarn docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:pakholam/lerna-typescript.git main:gh-page

cd -
