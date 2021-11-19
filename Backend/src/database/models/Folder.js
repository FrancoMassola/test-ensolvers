const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = new require("../connectionORM");

class Folder extends Model {}

Folder.init(
  {
    //set attributes
    id_folder: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      autoIncrementIdentity: true,
    },
    name_folder: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, 
    //choose the model name
    modelName: "Folder", 
    createdAt: false,
    updatedAt: false,
  }
);

// for testing
console.log(Folder === sequelize.models.Folder); // true

module.exports = Folder;
