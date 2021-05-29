const porta = 4004

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({ extended: true}))

//GET(id)
app.get('/pessoas/:id', (req, res, next) => {
    res.send(database.getPessoa(req.params.id))
})

//GET ALL
app.get('/pessoas', (req, res, next) => {
    res.send(database.getPessoas())
})

//POST
app.post('/pessoas', (req, res, next) => {
    const pessoa = database.salvarPessoa({
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
        cpf: req.body.cpf,
        profissao: req.body.profissao
    })
    res.send(pessoa) //JSON
})

//PUT
app.put('/pessoas/:id', (req, res, next) => {
    const pessoa = database.salvarPessoa({
        id: req.params.id,
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
        cpf: req.body.cpf,
        profissao: req.body.profissao
    })
    res.send(pessoa) //JSON
})

app.delete('/pessoas/:id', (req, res) => {
    const pessoa = database.excluirPessoa(req.params.id)
    res.send(pessoa)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})