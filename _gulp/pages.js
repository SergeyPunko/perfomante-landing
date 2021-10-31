const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const config = require('./_config');
const pug = require('gulp-pug');


function views() {
  return src(`${config.source}/views/**/*.*`)
    .pipe(changed(`${config.source}/views/*.*`))
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest(config.dist));
};

function html() {
  return src(`${config.source}/*.html`)
    .pipe(changed(`${config.source}/*.html`))
    .pipe(dest(config.dist));
}

function modals() {
  return src(`${config.source}/modals/*.html`)
    .pipe(changed(`${config.source}/modals/*.html`))
    .pipe(dest(`${config.dist}/modals`));
}

function pages() {
  return src(`${config.source}/pages/**/*.*`)
    .pipe(changed(`${config.source}/pages/*.*`))
    .pipe(dest(`${config.dist}`));
}

exports.views = views;
exports.modals = modals;
exports.pages = pages;
exports.html = html;
