const { series, parallel } = require('gulp');
const clean = require('./_gulp/clean');
const { serve } = require('./_gulp/browser-sync');
const { html, modals } = require('./_gulp/pages');
const styles = require('./_gulp/styles');
const scripts = require('./_gulp/scripts');
const img = require('./_gulp/images');
const { watch } = require('./_gulp/watch');
const fonts = require('./_gulp/fonts');

exports.clean = clean;
exports.html = html;
exports.modals = modals;
exports.styles = styles;
exports.scripts = scripts;
exports.img = img;
exports.watch = watch;

exports.dev = series(
  clean,
  parallel(html, styles, scripts, img, modals, fonts),
  parallel(serve, watch)
);

exports.build = series(
  clean,
  parallel(html, styles, scripts, img, modals, fonts),
  parallel(watch)
);
