const express = require("express");
const route = express.Router();


const { renderHome } = require("../controllres/msguser");

route.get("/", renderHome);

module.exports = route;
