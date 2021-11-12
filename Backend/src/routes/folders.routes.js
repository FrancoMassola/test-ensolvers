//require Router module of express
const Router = require("express");
const folderControllers = require("../controllers/folders.controller");

//generate a instance of the Router
const router = Router();

//get all folders
router.get("/folders", folderControllers.getFolders);
//add new folder
router.post("/folders", folderControllers.createNewFolder );
//get one especific folder
router.get("/folders/:id", folderControllers.getFoldersById);
//delete a folder
router.delete("/folders/:id",folderControllers.deleteFolder);


module.exports = router;
