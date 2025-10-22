// config/db.config.js
module.exports = {
  HOST: "localhost",
  USER: "root",       // Usuário padrão do XAMPP
  PASSWORD: "",       // Senha padrão do XAMPP (vazia)
  DB: "biblioteca",   // Nome do banco de dados criado
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};