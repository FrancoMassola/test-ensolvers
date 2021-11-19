const { DataTypes, Model } = require("sequelize");
const { sequelize } = new require("../connection");

class Task extends Model {}

Task.init(
  {
    // define Model attributes
    id_task: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      autoIncrementIdentity: true,
    },
    name_task: {
      type: DataTypes.STRING,
    },
    status_task: {
      type: DataTypes.INTEGER,
    },
    id_task_folder: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    //Model name
    modelName: "Task",
    //disable this attributes
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Task;
