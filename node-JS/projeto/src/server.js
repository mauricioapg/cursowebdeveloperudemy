const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({ extended: true}))

//GET(id)
app.get('/produtos/:id', (req, res, next) => {
    res.send(database.getProduto(req.params.id))
})

//GET ALL
app.get('/produtos', (req, res, next) => {
    res.send(database.getProdutos())
})

//POST
app.post('/produtos', (req, res, next) => {
    const produto = database.salvarProduto({
        nome: req.body.nome,
        fabricante: req.body.fabricante,
        modelo: req.body.modelo,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//PUT
app.put('/produtos/:id', (req, res, next) => {
    const produto = database.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        fabricante: req.body.fabricante,
        modelo: req.body.modelo,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//PATCH
//??????

//DELETE
app.delete('/produtos/:id', (req, res, next) => {
    const produto = database.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

//LIGAR O SERVIDOR
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})