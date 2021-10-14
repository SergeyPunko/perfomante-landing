const { src, dest } = require('gulp');
const group_media = require("gulp-group-css-media-queries");
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const { server } = require('./browser-sync');
const config = require('./_config');

sass.compiler = require('node-sass');

function styles() {
    return src(`${config.source}/scss/style.scss`)
        .pipe(sass({
            includePaths: ['node_modules'],
            outputStyle: 'expanded'
        }))
        .pipe(group_media())
        .pipe(autoprefixer({
            cascade: false,
            remove: false
        }))
        .pipe(cleanCSS())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(`${config.dist}/css`))
        .pipe(server.stream())
}

module.exports = styles;
