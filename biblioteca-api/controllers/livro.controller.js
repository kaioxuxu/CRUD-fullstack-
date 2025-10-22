const db    = require("../models");
const Livro = db.livros; // supondo que exportamos como plural
// Cadastra um novo livro
exports.criar = (req, res) => {
  if (!req.body.nome || !req.body.autor) {
    res.status(400).send({ message: "Nome e autor são obrigatórios!" });
    return;
  }
  const livro = {
    nome: req.body.nome,
    autor: req.body.autor,
    ano: req.body.ano,
    disponibilidade: req.body.disponibilidade ?? true,
  };
  Livro.create(livro)
    .then((data) => res.status(201).send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};
// Lista todos os livros
exports.listar = (req, res) => {
  Livro.findAll()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};
