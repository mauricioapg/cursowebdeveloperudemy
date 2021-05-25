//    ../ significa que eu estou voltando para a pasta anterior
const moduloA = require('../../../moduloA')
console.log(moduloA.clubesPaulistas)

//index é o caminho padrão que ele procura na pasta
const pastaC = require('../pastaC/index')
console.log(pastaC.saudacao)

const http = require('http')
http.createServer((req, res) => {
    res.write('Olá, mundo!')
    res.end()
}).listen(8080)