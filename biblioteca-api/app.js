// app.js
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors"); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors()); 
app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 1. ROTAS DA API DEVEM VIR PRIMEIRO
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api", require("./routes/livro.routes")); // <--- AQUI!

// 2. ARQUIVOS ESTÁTICOS (FRONTEND) VÊM DEPOIS
// Mova este bloco para baixo!
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;