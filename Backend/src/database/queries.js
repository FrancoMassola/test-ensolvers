//declare all the Sql queries
const sqlQueries = {
  getAllTasks: "SELECT * FROM Task",
  addNewTask:
    "INSERT INTO Task (name_task, status_task,id_task_folder) VALUES (@name_task, @status_task, @id_task_folder)",
  getTaskById: "SELECT * FROM Task where id_task = @id",
  deleteTask: "DELETE FROM Task where id_task = @id",
  updateTaskById: "UPDATE Task SET name_task = @name_task, status_task = @status_task WHERE id_task = @id",
  getAllFolders: "SELECT * FROM Folder",
  addNewFolder:
  "INSERT INTO Folder (name_folder) VALUES (@name_folder)",
  getFolderById: "SELECT * FROM Folder where id_folder = @id",
  getFolderTasks: "SELECT * FROM Task as task INNER JOIN Folder as folder ON folder.id_folder=task.id_task_folder WHERE id_task_folder = @id_folder",
  deleteFolder: "DELETE FROM Folder where id_folder = @idFolder",
};

module.exports = {
  sqlQueries,
};
