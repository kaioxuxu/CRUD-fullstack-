// components/ListaLivros.js
import React from "react";
function ListaLivros({ livros }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Autor</th>
          <th>Ano</th>
          <th>Disponível</th>
        </tr>
      </thead>
      <tbody>
        {livros.map((l, idx) => (
          <tr key={idx}>
            <td>{l.nome}</td>
            <td>{l.autor}</td>
            <td>{l.ano}</td>
            <td>{l.disponibilidade ? "Sim" : "Não"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ListaLivros;
