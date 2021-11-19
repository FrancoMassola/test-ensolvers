const { getConnection } = require("../database/connection");
const Folder = require("../database/models/Folder");

//define the function to get all folders
const getFolders = async (req, res) => {
  try {
    //implement getConnection and execute the SQL request
    await getConnection();
    //find all folders
    await Folder.findAll().then((folder) => {
      res.json(folder);
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//function to add a new folder into db
const createNewFolder = async (req, res) => {
  let { id_folder, name_folder } = req.body;

  //handling the post request error form the server
  if (name_folder == null) {
    return res
      .status(400)
      .json({ msg: "Bad request, all the fields are required" });
  }

  try {
    //db connection
    await getConnection();
    //execute the request
    await Folder.create({
      id_folder,
      name_folder,
    }).then((newFolder) => {
      res.json({ newFolder });
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//get a folder by id
const getFoldersById = async (req, res) => {
  //get the id
  const { id } = req.params;
  try {
    //implement db connection
    await getConnection();
    await Folder.findByPk(id).then((folder) => {
      res.json(folder.dataValues);
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//delete a folder by id
const deleteFolder = async (req, res) => {
  //get the id
  const { id } = req.params;
  try {
    //implement db connection
    await getConnection();
    await Folder.destroy({
      where: {
        id_folder: id,
      },
    }).then((rowDeleted) => {
      //send a 204 status ok deleted
      res.sendStatus(204);
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//export all the functions
module.exports = {
  getFolders,
  createNewFolder,
  getFoldersById,
  deleteFolder,
};
