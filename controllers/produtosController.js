var Produto = require('../models/Produto.js');

exports.save = function (nome, descricao, valor, callback) {
  new Produto({
    nome: nome,
    descricao: descricao,
    valor: valor
  }).save(function (error, produto) {
    if(error) {
      callback({error:error});
    }else {
      callback(produto);
    }
  });
}

exports.list = function (callback) {
  Produto.find({}, function (error, produtos) {
    if(error) {
      callback({error:error})
    }else {
      callback(produtos);
    }
  });
}

exports.delete = function (id, callback) {
  Produto.findById({_id:id}, function (error, produto) {
    if(error) {
      callback({error:error});
    }else {
      produto.remove(function (error) {
        if(!error) {
          callback({resposta:true});
        }else {
          callback({resposta:false});
        }
      })
    }
  });
}
