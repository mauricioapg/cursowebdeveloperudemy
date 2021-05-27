const porta = 3003

const express = require('express')
const app = express()
const database = require('./database')

app.get('/produtos/:id', (req, res, next) => {
    res.send(database.getProduto(req.params.id))
})

app.get('/produtos', (req, res, next) => {
    res.send(database.getProdutos())
})

app.post('/produtos', (req, res, next) => {
    const produto = database.salvarProduto({
        nome: req.body.name,
        fabricante: req.body.fabricante,
        modelo: req.body.modelo,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})