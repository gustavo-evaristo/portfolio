import express from 'express'

import httpRedirect from './midlewares/httpRedirect.js'

//Iniciando o app
const app = express()

//Permitindo os arquivos estáticos
app.use(express.static('public'))

//Definido o template engine
app.set('view engine', 'ejs')

//Cria um middleware onde todas as requests passam por ele 
app.use(httpRedirect)

app.get('/', (req, res) => res.render('index'))

app.get('*', (req, res) => res.redirect('/'))

export default app