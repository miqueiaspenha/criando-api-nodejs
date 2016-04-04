var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.end('Esse é um teste');
});

module.exports = router;
