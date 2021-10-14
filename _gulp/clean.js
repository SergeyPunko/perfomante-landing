const del = require('del');
const config = require('./_config');

function clean() {
    return del(`${config.dist}/*`);
}

module.exports = clean;