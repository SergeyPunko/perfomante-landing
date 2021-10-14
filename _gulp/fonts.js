const { src, dest } = require("gulp");
const { dist, source } = require("./_config")

function fonts() {
    return src(`${source}/fonts/**/*`)
        .pipe(dest(`${dist}/fonts`))
}

module.exports = fonts;

