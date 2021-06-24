const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformarCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) //se tiver um erro, retorna ele no log
        .pipe(uglifycss({ 'uglycomments': true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHtml() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('build'))
}

exports.default = series(transformarCSS, copiarHtml)