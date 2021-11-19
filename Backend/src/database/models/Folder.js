const { DataTypes, Model } = require("sequelize");
const { sequelize } = new require("../connection");

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
    //disable this attributes
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Folder;
