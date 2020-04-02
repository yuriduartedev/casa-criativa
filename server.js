// Usei o express para criar e configurar meu servidor
const express = require('express');
const server = express();
const db = require('./db');

const IdeasController = require('./controllers/IdeasController');
const IndexController = require('./controllers/IndexController')

// configurar arquivos estáticos (css, scripts, images)
server.use(express.static("public"));

// habilitar uso do req.body
server.use(express.urlencoded({ extended: true }))

// configuração do template engineer nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  express: server,
  noCache: true, // boolean
})

// Criei uma rota e capturo o pedido do cliente para responder
server.get("/", IndexController.index);
server.post("/", IndexController.create);
server.get("/ideias", IdeasController.index);


// Liguei meu servidor na porta 3000
server.listen(3000);