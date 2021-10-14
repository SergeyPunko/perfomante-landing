const { src, dest } = require('gulp');
const webpack = require('webpack-stream');
const config = require('./_config');

function scripts() {
  return src(`${config.source}/js/index.js`)
    .pipe(webpack(require('./webpack/webpack')))
    .pipe(dest(`${config.dist}/js`));
}

exports.scripts = scripts;
