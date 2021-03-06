#!/usr/bin/env sh

# abort on errors
set -e

# Check spelling
yarn spell-check

# Internal link check
yarn internal-link-check

# build
yarn build

# External link check
yarn external-link-check

# navigate into the build output directory
cd src/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Sarrasor/RoboticsRoadmap.git master:gh-pages

cd -