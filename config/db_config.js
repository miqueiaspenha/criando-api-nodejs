var mongoose = require('mongoose');

var urlString = 'mongodb://miqueiaspenha:m1l119201603@ds037415.mlab.com:37415/mymongoteste';

mongoose.connect(urlString, function (err, res) {
  if(err) {
    console.log('Erro: ' + err);
  }else {
    console.log('Conexão estabelecida com banco');
  }
});
