var Usuario = require('../models/Usuarios.js');

exports.save = function (nome, senha, callback) {
  Usuario.findOne({nome:nome}, function (error, usuario) {
    if(error) {
      callback({error:error});
    }else if(usuario) {
      callback({retorno:false});
    }else {
      var novoUsuario = new Usuario();
      novoUsuario.nome = nome;
      novoUsuario.senha = novoUsuario.gerarSenha(senha);
      novoUsuario.token = novoUsuario.gerarToken(nome, senha);
      novoUsuario.save(function (error, usuario) {
        if(error) {
          callback({error:error});
        }else {
          callback({retorno: true});
        }
      });
    }
  });
}

exports.login = function (nome, senha, callback) {
  Usuario.findOne({nome:nome}, function (error, usuario) {
    if(error) {
      callback({error:error});
    }else if(usuario) {
      if(usuario.validarSenha(senha)) {
        callback({token:usuario.token});
      }else {
        callback({error:'password is invalid'});
      }
    }else {
      callback({error:false});
    }
  });
}

exports.list = function (token, callback) {
  Usuario.findOne({token:token}, function (error, usuario) {
    if(error) {
      callback({error:error});
    }else if(usuario) {
      callback({nome:usuario.nome});
    }else {
      callback({error:false});
    }
  });
}

exports.authorize = function (token, callback) {
  Usuario.findOne({token:token}, function (error, usuario) {
    if(error) {
      callback({error:error});
    }else if(usuario) {
      callback({retorno:true});
    }else {
      callback({retorno:false});
    }
  });
}
