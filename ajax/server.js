const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const porta = 3003

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const multer = require('multer') /* framework de upload de arquivos */

const storage = multer.diskStorage({
    destination: function (req, file, callback) { /* define o destino do arquivo */
        callback(null, './upload')
    },
    filename: function (req, file, callback) { /* define o nome do arquivo */
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo') /* chama a função multer para fazer o upload */

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro')
        }
        res.end('Concluído com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.listen(porta, () => {
    console.log(`Executando na porta ${porta}...`)
})