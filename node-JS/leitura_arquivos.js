//FORMA 1 DE LER UM ARQUIVO (FILESTREAM)
const fs = require('fs')

const caminho = __dirname + '/arquivo.json' //dirname representa o caminho absoluto até o arquivo

// síncrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncrono... Executou depois de todos os outros
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(config.db.host + ' ' + config.db.port)
})

//--------------------------------------------------------------------------------------------------------

//FORMA 2 DE LER UM ARQUIVO
const db = require('./arquivo.json')
console.log(db)

const package = require('./../../cursowebdeveloperudemy/package-lock.json')
console.log(package)

//----------------------------------------------------------

//LENDO PASTAS

fs.readdir(__dirname, 'utf-8', (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

fs.readdir('c:/', 'utf-8', (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})