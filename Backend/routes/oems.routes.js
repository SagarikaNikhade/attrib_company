const express = require("express");
const {OemsModel} = require("../models/oems.models");
const oemsRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

oemsRouter.get("/", async(res,req)=>{
   try {
      const oems = await OemsModel.findOne({ name_of_the_model, year_of_the_model});
      if (!oems) {
        res.send({ msg: 'Not Found!' });
      } else {
        res.send({ data: oems });
      }
    } catch (error) {
      res.send({"msg":err.message});
    }
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