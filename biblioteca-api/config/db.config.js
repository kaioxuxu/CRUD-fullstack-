// config/db.config.js
module.exports = {
  HOST: "localhost", // O MySQL está rodando no seu computador (localhost)
  USER: "root",      // O usuário padrão do MySQL no XAMPP é "root"
  PASSWORD: "",      // A senha padrão do usuário "root" no XAMPP é vazia
  DB: "biblioteca",  // O nome do banco de dados que você criou
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};