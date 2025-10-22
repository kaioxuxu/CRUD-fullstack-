// models/index.js

const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
});

// Testa conexão
sequelize
  .authenticate()
  .then(() => console.log("Conectado ao MySQL com sucesso!"))
  .catch((err) =>
    console.error("Falha na conexão seu inutil imprestavel", err)
  );

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// ESTA LINHA É CRUCIAL: Você precisa de algo assim no seu index.js
// Se o seu modelo de livro está no arquivo 'livro.model.js':
db.livros = require("./livro.model.js")(sequelize, Sequelize); 
// Se você não tiver esta linha, o Sequelize não sabe que modelo ele deve sincronizar.



// 1. Defina/Importe seus Modelos aqui (Exemplo: Livros)
// db.livros = require("./livro.model.js")(sequelize, Sequelize);
// Note: Você deve criar um arquivo livro.model.js para isso funcionar!

// 2. Chame o sync() APÓS definir todos os modelos
db.sequelize
  .sync({ alter: true }) // Use { alter: true } para evitar perda de dados em alterações,
  .then(() => console.log("Tabelas sincronizadas com o banco!")) // ou { force: true } se quiser recriar tudo.
  .catch((err) => console.error("Erro na sincronização:", err));


// 3. Exporte o objeto db no final, após todas as configurações
module.exports = db;
