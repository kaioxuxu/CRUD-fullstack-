// App.js
import React, { useState, useEffect } from "react";
import './App.css';
import FormLivro from "./components/FormLivro";
import ListaLivros from "./components/ListaLivros";
function App() {
  const [livros, setLivros] = useState([]);
  // Função para obter lista de livros do backend
  const fetchLivros = () => {
    fetch("/api/livros")
      .then((res) => res.json())
      .then((data) => setLivros(data))
      .catch((err) => console.error(err));
  };
  useEffect(fetchLivros, []);
  // Função para adicionar livro via POST
  const adicionarLivro = (livro) => {
    fetch("/api/livros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livro),
    })
      .then((res) => res.json())
      .then((data) => {
        setLivros([...livros, data]);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1>Cadastro de Livros</h1>
      <FormLivro onAdicionar={adicionarLivro} />
      <ListaLivros livros={livros} />
    </div>
  );
}
export default App;
