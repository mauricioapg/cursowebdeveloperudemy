const gulp = require('gulp')
const series = gulp.series

function copiar(cb){
    console.log('Aqui executa a tarefa de copiar...')
    return cb()
}

module.exports.default = series(copiar)