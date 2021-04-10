const express = require('express')

const path = require('path')

const fs = require('fs')

const httpRedirect = require('./src/midlewares/httpRedirect.js')

//Iniciando o app
const app = express()

//Permitindo os arquivos estáticos
.use(express.static('public'))

//Cria um middleware onde todas as requests passam por ele 
.use(httpRedirect)

.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

//Rota do curriculo
.get('/cv', (req, res) => {

    let file = fs.readFileSync(path.join(__dirname, 'public', 'cv.pdf'))

    res.setHeader('Content-Length', file.length)

    res.write(file, 'Cv')
    
    res.end()
})

module.exports = app