// models/index.js
const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
  // Para debugar o que o Sequelize está fazendo no DB:
  // logging: console.log 
});

// Testa conexão
sequelize.authenticate()
  .then(() => console.log("Conectado ao MySQL com sucesso!"))
  .catch(err => console.error("Falha na conexão, verifique o XAMPP e db.config.js:", err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 1. IMPORTAÇÃO DO MODELO:
// Importa a definição do modelo Livro e anexa-o ao objeto db
db.livros = require("./livro.model.js")(sequelize, Sequelize); 

// 2. SINCRONIZAÇÃO:
// Sincroniza todas as tabelas. { alter: true } tenta ajustar a tabela sem perder dados.
db.sequelize.sync({ alter: true }) 
  .then(() => console.log("Tabelas sincronizadas com o banco!"))
  .catch(err => console.error("Erro na sincronização:", err));

// 3. EXPORTAÇÃO (DEVE SER A ÚLTIMA AÇÃO):
module.exports = db;