// components/FormLivro.js
import React, { useState } from "react";
import "../App.css";

function FormLivro({ onAdicionar }) {
  const [livro, setLivro] = useState({
    nome: "",
    autor: "",
    ano: "",
    disponibilidade: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro({ ...livro, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdicionar(livro);
    setLivro({ nome: "", autor: "", ano: "", disponibilidade: true });
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Novo Livro</h2>
      <form onSubmit={handleSubmit} className="form-livro">
        <label>
          Nome do Livro:
          <input
            name="nome"
            value={livro.nome}
            onChange={handleChange}
            placeholder="Ex: O Senhor dos Anéis"
            required
          />
        </label>

        <label>
          Autor:
          <input
            name="autor"
            value={livro.autor}
            onChange={handleChange}
            placeholder="Ex: J.R.R. Tolkien"
            required
          />
        </label>

        <label>
          Ano:
          <input
            name="ano"
            value={livro.ano}
            onChange={handleChange}
            placeholder="Ex: 1954"
            type="number"
          />
        </label>

        <label className="checkbox">
          <input
            name="disponibilidade"
            type="checkbox"
            checked={livro.disponibilidade}
            onChange={(e) =>
              setLivro({ ...livro, disponibilidade: e.target.checked })
            }
          />
          Disponível na loja?
        </label>

        <button type="submit">Cadastrar Livro</button>
      </form>
    </div>
  );
}

export default FormLivro;
