// controllers/livro.controller.js
const db = require("../models");
const Livro = db.livros; 

// Cadastra um novo livro
exports.criar = (req, res) => {
    // Para garantir que o campo 'disponivel' está sendo enviado (do frontend)
    console.log("Dados recebidos (req.body):", req.body); 

    if (!req.body.nome || !req.body.autor) {
        return res.status(400).send({ message: "Nome e autor são obrigatórios!" });
    }

    const livro = {
        nome: req.body.nome,
        autor: req.body.autor,
        ano: req.body.ano,
        disponibilidade: req.body.disponivel === 'on' || req.body.disponivel === true, 
    };

    Livro.create(livro)
        .then((data) => res.status(201).send(data))
        .catch((err) => res.status(500).send({ 
            message: err.message || "Erro ao tentar salvar o livro."
        }));
};

// Lista todos os livros
exports.listar = (req, res) => {
    Livro.findAll()
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ 
            message: err.message || "Erro ao listar os livros." 
        }));
};