const express = require('express')

const path = require('path')

const httpRedirect = require('./src/midlewares/httpRedirect.js')

//Iniciando o app
const app = express()

//Permitindo os arquivos estáticos
app.use(express.static('public'))

app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')))

//Definido o template engine
app.set('view engine', 'ejs')

//Cria um middleware onde todas as requests passam por ele 
app.use(httpRedirect)

app.get('/', (req, res) => res.render('index'))

app.get('*', (req, res) => res.redirect('/'))

module.exports = app