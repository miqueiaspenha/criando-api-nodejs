var app = require('./config/app_config.js');
var db = require('./config/db_config.js');
var produtoController = require('./controllers/produtosController.js');
var produtos = require('./routes/produtoRouter.js');

app.get('/', function (req, res) {
  res.end('Bem vindo a API de Produtos');
});

app.use('/produtos', produtos);
