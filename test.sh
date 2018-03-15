set -e

yes | vue init kitwon/vue-mpa test

cd test
yarn install
npm run lint
npm test
npm run build