const express = require("express");
const {UserModel} = require("../models/user.models");
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

userRouter.post('/register', async (req, res) => {
    const { name,email,password,profile } = req.body;
  
    try {
      const user = await UserModel.findOne({ email });
      
      if (user) {
        res.send('User already exists.');
      } else {
          bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
              res.send({ err: err.message });
            } else {
              const newUser = new UserModel({ name,email, password: hash,profile });
              await newUser.save();
              res.send('User registered successfully!');
            }
          });
        }
      }
     catch (err) {
      res.send({ msg: err.message });
    }
  });

userRouter.post("/login",async(req,res)=>{
   const{email,password}=req.body;
   try{
       const user= await UserModel.findOne({email});
       if(user){
           bcrypt.compare(password,user.password,(err, result)=> {
                if(result){
                   res.send({"msg":"Login Successfull !!","token":jwt.sign({"userID":user._id}, "secreteAttryb")});
                }else{
                   res.send("Wrong Credentials !!");
                }
           });
       }else{
           res.send("Please Register First !!");
       }
   }catch(err){
       res.send({"msg":err.message});
   }
})


module.exports={userRouter}