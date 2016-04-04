var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var UsuarioSchema = mongoose.Schema({
  nome: String,
  senha: String,
  token: String
});

UsuarioSchema.methods.gerarSenha = function (senha) {
  return bcrypt.hashSync(senha, bcrypt.genSaltSync(9));
}

UsuarioSchema.methods.validarSenha = function (senha) {
  return bcrypt.compareSync(senha, this.senha);
}

UsuarioSchema.methods.gerarToken = function (nome, senha) {
  return jwt.sign({nome:nome, senha:senha}, 'segredo');
}

module.exports = mongoose.model('Usuario', UsuarioSchema);
