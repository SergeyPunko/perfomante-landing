const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const config = require('./_config');

function backend() {
  return src(`${config.source}/backend/**/*`)
    .pipe(changed(config.dist))
    .pipe(dest(`${config.dist}/backend`))
}

exports.backend = backend;
