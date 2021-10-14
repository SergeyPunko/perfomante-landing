const { series, parallel } = require('gulp');
const clean = require('./_gulp/clean');
const { serve } = require('./_gulp/browser-sync');
const { views, html, modals, pages } = require('./_gulp/pages');
const styles = require('./_gulp/styles');
const { scripts } = require('./_gulp/scripts');
const { images, videos } = require('./_gulp/images');
const { watch } = require('./_gulp/watch');
const fonts = require('./_gulp/fonts');
const { backend } = require('./_gulp/backend');
const { seoConfig } = require('./_gulp/seo-config');

exports.clean = clean;
exports.views = views;
exports.backend = backend;
exports.styles = styles;
exports.scripts = scripts;
exports.img = images;
exports.videos = videos;
exports.watch = watch;
exports.seoConfig = seoConfig;


exports.dev = series(
  clean,
  parallel(html, pages, styles, scripts, views, images, videos, modals, backend, fonts, seoConfig),
  parallel(serve, watch)
);

exports.build = series(
    clean,
    parallel(html, modals, pages, styles, scripts, views, images, videos, fonts, seoConfig, backend),
    parallel(watch)
);
