# vue-mpa-boilerplate

> A Vue 2.0 MPA boilerplate expand on [vuejs-template/webpack](https://github.com/vuejs-templates/webpack)

## Documentation

Except the modules entries, this template is the same as [vuejs-template/webpack](https://github.com/vuejs-templates/webpack), more features to view [webpack template doc](http://vuejs-templates.github.io/webpack/).

## Useage

```bash
$ npm install vue-cli -g
$ vue init kitwon/vue-mpa your-project-name
$ cd your-project-name
$ npm install
$ npm run dev
```

⚠️ after run the `npm run dev` command, visit **http://localhost:8080/modules/index.html** to develop.

## switch to single page application

It's easy. Change the entry object in `build/webpack.base.conf.js` to your boostrap file path. But the more efficient way is use `vue init webpack your-project-name` command 😅
