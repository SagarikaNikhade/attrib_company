const express = require("express");
const {OemsModel} = require("../models/oems.models");
const oemsRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

oemsRouter.get("/", async(res,req)=>{

})

oemsRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    try{
       await OemsModel.insertMany(payload);
       res.send("Data is added");
    }catch(err){
       res.send({"msg":err.message});
    }
})

module.exports={oemsRouter}