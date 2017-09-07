var glob = require('glob')
var path = require('path')
var config  = require('../config/index.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')

function getEntry(filePath) {
  var entries = {},
    basename, pathname, tmp

  glob.sync(filePath).forEach(entry => {
    basename = path.basename(entry, path.extname(entry))
    tmp = entry.split('/').splice(-3)
    pathname = path.join(tmp.splice(0, 1), '/', basename)
    entries[pathname] = entry
  })

  return entries;
}

function getHtmlPlugin(entries, isPack) {
  var tempArr = [];
  for (var filepath in entries) {
    var conf = {
      filename: `${filepath}.html`,
      template: resolve('template.html'),
      inject: false,
      appMountIds: ['app'],
      chunksSortMode: 'dependency'
    }

    if (filepath in entries) {
      conf.chunks = ['manifest' ,'vendor', filepath];
      conf.hash = true;
    }

    if (process.env.NODE_ENV === 'production') {
      conf.minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }

    tempArr.push(new HtmlWebpackPlugin(conf))
  }

  return tempArr;
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = { getEntry, getHtmlPlugin, resolve }
