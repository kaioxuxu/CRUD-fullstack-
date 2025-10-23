// components/ListaLivros.js
import React from "react";
import "../App.css";

function ListaLivros({ livros }) {
  return (
    <div className="lista-container">
      <h2>Livros Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Autor</th>
            <th>Ano</th>
            <th>Disponibilidade</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((l, idx) => (
            <tr key={idx}>
              <td>{l.nome}</td>
              <td>{l.autor}</td>
              <td>{l.ano}</td>
              <td>
                <span
                  className={
                    l.disponibilidade ? "status disponivel" : "status indisponivel"
                  }
                >
                  {l.disponibilidade ? "Sim" : "Não"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaLivros;
