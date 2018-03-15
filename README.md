# vue-mpa-boilerplate

> A Vue MPA boilerplate extend extend from [vuejs-template/webpack](https://github.com/vuejs-templates/webpack)

## Useage

use it with `vue-cli` (suggest)

```bash
$npm install vue-cli -g
$vue init kitwon/vue-mpa your-project-name
```

**NOTICE**, When installed template, run `cd your-project-name && npm run dev`, and visit **localhost:8080/modules/index.html**.

## What's different

1. generate multiple page aplication not single page, has all vue-cli/webpack functions
2. unit test use [jest](http://facebook.github.io/jest/) to instead mocha

## switch to single page application

It's easy. Change the entry object in `build/webpack.base.conf.js` to your boostrap file path. But the more efficient way is use `vue init webpack your-project-name` command 😅
