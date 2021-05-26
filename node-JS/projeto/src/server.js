const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', fabricante: 'Dell', modelo: 'Latitude 3450', preco: 3086.90}) //será convertido automaticamente para JSON
    next()
})

app.post('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', fabricante: 'Dell', modelo: 'Inspiron 1510', preco: 2680.90}) //será convertido automaticamente para JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})