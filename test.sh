set -e

yes | node ./bin/vue-mpa-init test

cd test
npm install
npm run lint
npm test
npm run build