const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

const antes1 = cb => {
    console.log('Tarefa Antes 1...')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2...')
    return cb()
}

function copiar(cb) {    
    //1ª forma
    gulp.src('pastaA/**/*.txt') //copia somente arquivos com a extensão txt
    .pipe(gulp.dest('pastaB'))

    //2ª forma
    /* gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB')) */
    return cb()
}

const depois = cb => {
    console.log('Tarefa Depois...')
    return cb()
}

//Executando em série
module.exports.default = series(
    parallel(antes1, antes2), //Executando em paralelo
    copiar,
    depois,
)