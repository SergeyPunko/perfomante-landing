const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
const { dist, source } = require("./_config")

function images() {
    return src(`${source}/img/**/*`)
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlacer: true,
                optimizationLavel: 3
            })
        )
        .pipe(dest(`${dist}/img`))
}

function videos() {
    return src(`${source}/video/*`)
        .pipe(dest(`${dist}/video`))
}

module.exports = {
    images,
    videos
};
