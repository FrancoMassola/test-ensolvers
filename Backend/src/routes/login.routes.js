//require Router module of express
const Router = require("express");
const { signin } = require("../controllers/signin.controller");

//generate a instance of the Router
const router = Router();

//sign
router.post("/signin", signin);

module.exports = router;
