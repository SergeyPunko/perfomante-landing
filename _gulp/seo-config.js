const { src, dest } = require('gulp');
const config = require('./_config');

function seoConfig() {
  return src(`${config.source}/seo-config/*`)
    .pipe(dest(`${config.dist}/`));
}


exports.seoConfig = seoConfig;