const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//const database = require('./database')

app.use(bodyParser.urlencoded({ extended: true}))

//POST
app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h3>Parabéns!</h3>') //JSON
})

//LIGAR O SERVIDOR
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})