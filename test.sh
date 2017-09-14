set -e

yes | node ./bin/vue-mpa-init test

cd test
yarn install
npm run lint
npm test
npm run build