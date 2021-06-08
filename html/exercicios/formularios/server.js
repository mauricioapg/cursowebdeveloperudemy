const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//const database = require('./database')

app.use(bodyParser.urlencoded({ extended: true}))

//POST
app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h3>Parabéns!</h3><br>Usuário adicionado!') //JSON
})

//POST
app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h3>Parabéns!</h3><br>Usuário alterado!') //JSON
})

//LIGAR O SERVIDOR
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})