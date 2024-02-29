const express = require("express")
const router = express.Router();

const {newCreateMsg} = require("../controllres/addmsg")

router.post("/",newCreateMsg);
router.get("home", newCreateMsg);
module.exports= router