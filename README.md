# vue-mpa-boilerplate

> A Vue MPA boilerplate extend extend from [vuejs-template/webpack](https://github.com/vuejs-templates/webpack)


# Useage
use it with `vue-cli` (suggest)
```bash
$ npm install vue-cli -g
$ vue init kitwon/vue-mpa your-project-name
```

or use global command
```bash
$ npm install vue-mpa -g
$ vue-mpa-init your-project-name
```

# What's different
1. generate multiple page aplication not single page, has all vue-cli/webpack functions
2. unit test use [jest](http://facebook.github.io/jest/) to instead mocha

# switch to single page application
It's easy. Change the entry object in `build/webpack.base.conf.js` to your boostrap file path.

# Notice
1. due to use the multiple entry, so the middle ware `connect-history-api-fallback` will break.
2. if you want to set dev server route, use the [express router](http://expressjs.com/en/guide/routing.html), you can get the assets file in memory fs, such as
```javascript
app.get('/', (req, res, next) => {
  // filepath on the same path as dev file 
  compiler.outputFileSystem.readFile(filepath, (err, result) => {
    if (err) {
      console.log(err)
      next(err)
    }

    res.set('content-type', 'text/html')
    res.send(result)
  })
})
```