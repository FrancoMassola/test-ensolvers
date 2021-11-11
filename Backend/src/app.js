//require modules
const express = require("express");
const config = require("../src/config");
const taskroutes = require("./routes/tasks.routes");

//run express module
const app = express();

//settings
app.set("port", config.port);

//set routes to app
app.use(taskroutes);

module.exports = app;
