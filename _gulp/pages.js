const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const config = require('./_config');

function html() {
  return src(`${config.source}/*.html`)
    .pipe(changed(`${config.source}/*.html`))
    .pipe(dest(config.dist));
}

function modals() {
  return src(`${config.source}/modals/*.html`)
    .pipe(changed(`${config.source}/modals`))
    .pipe(dest(`${config.dist}/modals`));
}

exports.html = html;
exports.modals = modals;
