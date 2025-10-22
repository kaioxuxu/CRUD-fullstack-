// routes/index.js (CORRETO PARA API)
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json({ 
      message: "API da Biblioteca rodando com sucesso!"
  });
});

module.exports = router;