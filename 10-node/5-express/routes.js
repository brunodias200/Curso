const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// rotas de home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);
module.exports = route

// rotas de contato
route.get('/contato/:parametro1?', contatoController.contato)
