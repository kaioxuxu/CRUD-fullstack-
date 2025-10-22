// models/livro.model.js
module.exports = (sequelize, DataTypes) => {
  const Livro = sequelize.define("livro", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ano: {
      type: DataTypes.INTEGER,
    },
    disponibilidade: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  return Livro;
};
