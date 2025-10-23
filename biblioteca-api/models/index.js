// models/index.js
const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
});

// Testa conexão
sequelize.authenticate()
  .then(() => console.log("Conectado ao MySQL com sucesso!"))
  .catch(err => console.error("Falha na conexão, verifique o XAMPP e db.config.js:", err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.livros = require("./livro.model.js")(sequelize, Sequelize); 

db.sequelize.sync({ alter: true }) 
  .then(() => console.log("Tabelas sincronizadas com o banco!"))
  .catch(err => console.error("Erro na sincronização:", err));

module.exports = db;