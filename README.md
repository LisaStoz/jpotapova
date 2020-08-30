# Portfolio site

## Branches

- _dev_ - development environment
- _preprod_ - staging environment where production files are generated
- _master_ - live environment

## Instructions

To generate resources on dev environment run `grunt`

To update the live site:

1. switch to `preprod`
2. merge whatever changes you would like to release
3. `grunt` to generate the final resources
4. commit and view the website locally to check if everything is looking correct
5. switch to `master` branch, merge `preprod` to `master`, commit and push. All done, check the live website to observe the changes.
