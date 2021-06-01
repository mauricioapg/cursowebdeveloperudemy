const fs = require('fs')

//const caminho = __dirname + '/arquivo.json'

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            const arquivoLido = JSON.parse(conteudo)
            resolve(arquivoLido)
        })
    })
}

const salvarArquivoLido = arquivo => {
    console.log(arquivo)
    fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(arquivo), err => {
        console.log(err || 'Arquivo salvo!')
    })
}

lerArquivo(__dirname + '/arquivo.json')
    .then(salvarArquivoLido)