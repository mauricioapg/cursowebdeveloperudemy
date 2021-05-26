const fs = require('fs')

const produto = {
    descricao: 'Camisa social azul',
    valor: 59.90,
    tecido: 'algodão',
    marca: 'fascinios'
}

//ESCREVENDO ARQUIVOS
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})