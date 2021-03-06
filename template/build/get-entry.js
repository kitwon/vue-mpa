const glob = require('glob')
const path = require('path')
const config  = require('../config/index.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV

function getEntry(filePath) {
  let entries = {},
    basename, pathname, tmp

  glob.sync(filePath).forEach(entry => {
    basename = path.basename(entry, path.extname(entry))
    tmp = entry.split('/').splice(-3)
    pathname = path.join(tmp.splice(0, 1).join(), '/', basename)
    entries[pathname] = entry
  })

  return entries;
}

function getHtmlPlugin(entries, isPack) {
  if (typeof entries === 'string') entries = { index: entries }

  let tempArr = [];
  for (var filepath in entries) {
    let conf = {
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

    if (env === 'production') {
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
