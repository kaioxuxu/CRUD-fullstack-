// models/livro.model.js
module.exports = (sequelize, Sequelize) => {
    const Livro = sequelize.define("livro", {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        autor: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ano: {
            type: Sequelize.INTEGER
        },
        // O nome da coluna no seu DB é 'disponibilidade'
        disponibilidade: { 
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    });

    return Livro;
};