const { watch, series } = require('gulp');
const { reload } = require('./browser-sync');
const { views, html, modals, pages } = require('./pages');
const { backend } = require('./backend');
const styles = require('./styles');
const { scripts } = require('./scripts');
const { images, videos } = require('./images');
const fonts = require('./fonts');

const { source } = require('./_config');

function watcher() {
  watch(`${source}/views/**/*.*`, series(views, reload));
  watch(`${source}/pages/**/*.*`, series(pages, reload));
  watch(`${source}/modals/*.html`, series(modals, reload));
  watch(`${source}/*.html`, series(html, reload));
  watch(`${source}/backend/**/*`, series(backend, reload));
  watch(`${source}/scss/**/*`, styles);
  watch(`${source}/js/**/*`, series(scripts, reload));
  watch(`${source}/img/**/*`, series(images, reload));
  watch(`${source}/video/*`, series(videos, reload));
  watch(`${source}/fonts/**/*`, series(fonts, reload));
}

exports.watch = watcher;