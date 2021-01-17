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

echo "All checks passed!"
