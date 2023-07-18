const express = require("express");
const {OemsModel} = require("../models/oems.models");
const oemsRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

oemsRouter.get("/", async(res,req)=>{

})

module.exports={oemsRouter}