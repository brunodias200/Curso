const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

// rotas de home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);
module.exports = route

// rotas de contato
route.get('/contato/:parametro1?', contatoController.contato)
