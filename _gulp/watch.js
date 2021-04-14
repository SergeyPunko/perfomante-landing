const { watch, series } = require('gulp');
const { reload } = require('./browser-sync');
const { html, modals } = require('./pages');
const styles = require('./styles');
const scripts = require('./scripts');
const img = require('./images');
const fonts = require('./fonts');
const { source } = require('./_config');

function watcher() {
  watch(`${source}/*.html`, series(html, reload));
  watch(`${source}/modals/*.html`, series(modals, reload));
  watch(`${source}/scss/**/*`, styles);
  watch(`${source}/js/**/*`, series(scripts, reload));
  watch(`${source}/img/**/*`, series(img, reload));
  watch(`${source}/fonts/**/*`, series(fonts, reload));
}

exports.watch = watcher;