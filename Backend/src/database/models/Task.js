const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = new require("../connectionORM");

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
    name_task : {
      type: DataTypes.STRING,
    },
    status_task:{
        type: DataTypes.INTEGER
    },
    id_task_folder: {
        type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    modelName: "Task", //Model name
    createdAt: false,
    updatedAt: false,
  }
);

console.log(Task === sequelize.models.Task); // true

module.exports = Task;