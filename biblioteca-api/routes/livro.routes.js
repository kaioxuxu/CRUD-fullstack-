// routes/livro.routes.js
const livros = require("../controllers/livro.controller");
const express = require("express");
const router = express.Router();
// Criar um novo livro
router.post("/livros", livros.criar);
// Listar todos os livros
router.get("/livros", livros.listar);
module.exports = router;
