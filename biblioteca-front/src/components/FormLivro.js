// components/FormLivro.js
import React, { useState } from "react";
function FormLivro({ onAdicionar }) {
  const [livro, setLivro] = useState({
    nome: "",
    autor: "",
    ano: "",
    disponibilidade: true,
  });
  const handleChange = (e) =>
    setLivro({ ...livro, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdicionar(livro);
    setLivro({ nome: "", autor: "", ano: "", disponibilidade: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nome"
        value={livro.nome}
        onChange={handleChange}
        placeholder="Nome"
        required
      />
      <input
        name="autor"
        value={livro.autor}
        onChange={handleChange}
        placeholder="Autor"
        required
      />
      <input
        name="ano"
        value={livro.ano}
        onChange={handleChange}
        placeholder="Ano"
        type="number"
      />
      <label>
        Disponível:
        <input
          name="disponibilidade"
          type="checkbox"
          checked={livro.disponibilidade}
          onChange={(e) =>
            setLivro({ ...livro, disponibilidade: e.target.checked })
          }
        />
      </label>
      <button type="submit">Cadastrar Livro</button>
    </form>
  );
}
export default FormLivro;
