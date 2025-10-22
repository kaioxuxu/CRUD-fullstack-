// app.js
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors"); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var livroRouter = require('./routes/livro.routes')

var app = express();

app.use(cors()); 
app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 1. ROTAS DA API DEVEM VIR PRIMEIRO
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api", livroRouter); // <--- AQUI!

// 2. ARQUIVOS ESTÁTICOS (FRONTEND) VÊM DEPOIS
// Mova este bloco para baixo!
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});


module.exports = app;