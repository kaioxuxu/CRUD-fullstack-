# 📘 Library App — Sistema de Gerenciamento de Biblioteca

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![XAMPP](https://img.shields.io/badge/XAMPP-FB7A24?style=for-the-badge&logo=xampp&logoColor=white)

## 👨‍💻 Autor

**Kaio Alexsander da Silva de Sá**

## 🧩 Descrição do Projeto

O **Library App** é um sistema de gerenciamento de biblioteca desenvolvido para permitir o **cadastro** e a **listagem** de livros de forma simples e intuitiva.

Este projeto foi construído como uma aplicação **Full Stack**, demonstrando a integração completa entre as camadas:
* **Frontend:** React
* **Backend (API):** Node.js e Express
* **Banco de Dados:** MySQL (executado localmente via XAMPP)

O sistema tem como finalidade principal demonstrar a implementação de um **CRUD (Create, Read, Update, Delete)**, possibilitando ao usuário registrar, consultar, atualizar e excluir informações de livros.

---

## 🧠 Funcionalidades Principais

| Ícone | Funcionalidade | Descrição |
| :---: | :--- | :--- |
| 📗 | **Cadastro de Livros** | Permite registrar um novo livro no sistema. |
| 📚 | **Listagem de Livros** | Exibe todos os livros cadastrados no banco de dados. |


---

## ⚙️ Tecnologias Utilizadas

### Frontend
* **React.js** (Vite)
* JavaScript (ES6+)
* HTML5
* CSS3

### Backend
* **Node.js**
* **Express.js**
* Cors
* Nodemon (para ambiente de desenvolvimento)

### Banco de Dados
* **MySQL** (Gerenciado via **XAMPP** e phpMyAdmin)

---

## 🗂️ Estrutura de Pastas

O projeto segue uma estrutura de monorepo separando a aplicação em API (backend) e Interface (frontend):
---

## 💾 Configuração do Banco de Dados (XAMPP/MySQL)

Para que o backend se conecte corretamente ao banco de dados, siga os passos abaixo:

1.  **Inicie o MySQL:** Abra o Painel de Controle do **XAMPP** e inicie o módulo **MySQL**.
2.  **Acesse o phpMyAdmin:** No seu navegador, acesse `http://localhost/phpmyadmin`.
3.  **Crie o Banco de Dados:** Execute o comando SQL para criar o banco de dados principal:

    ```sql
    CREATE DATABASE biblioteca;
    ```

4.  **Crie a Tabela `livros`:** Dentro do banco de dados `biblioteca`, execute o comando para criar a tabela que armazenará os dados dos livros:

    ```sql
    CREATE TABLE livros (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        autor VARCHAR(255) NOT NULL,
        ano INT NOT NULL,
        disponibilidade BOOLEAN DEFAULT TRUE
    );
    ```
---

## 🚀 Execução do Projeto

Certifique-se de que o **MySQL** (via XAMPP) está em execução antes de iniciar as aplicações.

### 1️⃣ Backend (API)

O servidor da API será executado na porta `3001`.

```bash
# 1. Acesse a pasta do backend
cd biblioteca-api

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
npm start
# 1. Em uma nova janela do terminal, acesse a pasta do frontend
cd frontend

# 2. Instale as dependências
npm install

# 3. Inicie a aplicação
npm start