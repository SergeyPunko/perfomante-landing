const { series, parallel } = require('gulp');
const clean = require('./_gulp/clean');
const { serve } = require('./_gulp/browser-sync');
const { html, modals, pages } = require('./_gulp/pages');
const styles = require('./_gulp/styles');
const scripts = require('./_gulp/scripts');
const { images, videos } = require('./_gulp/images');
const { watch } = require('./_gulp/watch');
const fonts = require('./_gulp/fonts');
const { backend } = require('./_gulp/backend');
const { seoConfig } = require('./_gulp/seo-config');

exports.clean = clean;
exports.html = html;
exports.pages = pages;
exports.modals = modals;
exports.backend = backend;
exports.styles = styles;
exports.scripts = scripts;
exports.img = images;
exports.videos = videos;
exports.watch = watch;
exports.seoConfig = seoConfig;


exports.dev = series(
  clean,
  parallel(html, pages, styles, scripts, images, videos, modals, backend, fonts, seoConfig),
  parallel(serve, watch)
);

exports.build = series(
  clean,
  parallel(html, pages, styles, scripts, images, videos, modals, backend, fonts, seoConfig),
  parallel(watch)
);
