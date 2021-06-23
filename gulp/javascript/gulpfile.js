const { series, dest } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    gulp.src('src/**/*.js')
    .pipe(babel({
      coments: false, //tira os comentários do arquivo
      presets: ["env"]  
    }))
    .pipe(uglify()) //processo de minificação
    .pipe(concat('codigo.min.js')) //nome do arquivo
    .pipe(gulp,dest('build')) //destino do arquivo

    return cb()
}

exports.default = series(padrao)