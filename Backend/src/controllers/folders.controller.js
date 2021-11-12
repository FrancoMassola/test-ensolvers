//require the db connection
const { getConnection, sql } = require("../database/connection");
const { sqlQueries } = require("../database/queries");

//define the function to get all folders
const getFolders = async (req, res) => {
  try {
    //implement getConnection and excecute the SQL request
    const pool = await getConnection();
    let result = await pool.request().query(sqlQueries.getAllFolders);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//function to add a new folder into db
const createNewFolder = async (req, res) => {
    let { name_folder} = req.body;
  
    //handling the post request error form the server
    if (name_folder == null) {
      return res
        .status(400)
        .json({ msg: "Bad request, all the fields are required" });
    }
  
    try {
      //db connection
      const pool = await getConnection();
  
      //excecute sql request
      await pool
        .request()
        .input("name_folder", sql.VarChar, name_folder)
        .query(sqlQueries.addNewFolder);
      //send the response to the client with the new task added
      res.json({name_folder });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

//export all the functions
module.exports = {
  getFolders,
  createNewFolder
};
