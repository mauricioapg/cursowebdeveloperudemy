const webpack = require('webpack')

module.exports = {
    mode: 'development', //aqui define se é a versão final ou a versão de desenvolvimento
    entry: './src/principal.js', //arquivo de entrada
    output: {
        filename: 'principal.js', //arquivo de saída
        path: __dirname + '/public' //pasta de saída
    }
}

