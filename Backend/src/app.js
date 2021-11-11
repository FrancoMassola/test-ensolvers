//require modules
const express = require("express");
const config = require("../src/config");

//run express module
const app = express();

//settings
app.set("port", config.port);

module.exports = app;
