const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
}

function appCSS(cb) {
    return cb()
}

function appJS(cb) {
    return cb()
}

function appIMG(cb) {
    return cb()
}

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG,
}