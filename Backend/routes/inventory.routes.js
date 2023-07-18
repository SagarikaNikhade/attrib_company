const express = require("express");
const { InventoryModel } = require("../models/inventory.models");
const inventoryRouter = express.Router();

// individual deal
inventoryRouter.get("/:id",async(req,res)=>{
    const {id}=req.params;
    try{
       const data=await InventoryModel.findById(id);
       res.send(data);
    }catch(err){
        res.send({"msg":err.message});
    }
})

// GET
inventoryRouter.get("/",async(req,res)=>{
    let query={};
    const {price}=req.query;
    try{
        let post;
        if (price) {
            post = await InventoryModel.find({ price })
        } 
        res.status(200).json(post)
    }
    catch(err){
        res.send({"msg":err.message});
    }
})

// POST
inventoryRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    try{
       await InventoryModel.insertMany(payload);
       res.send("Data is added");
    }catch(err){
       res.send({"msg":err.message});
    }
})

// DELETE
inventoryRouter.delete("/delete/:id",async(req,res)=>{
    const{id}=req.params;
    try{
       await InventoryModel.findByIdAndDelete({_id:id});
       res.send("Data is deleted");
    }catch(err){
        res.send({"msg":err.message});
    }
})

// PATCH
inventoryRouter.patch("/update/:id",async(req,res)=>{
    const{id}=req.params;
    try{
       await InventoryModel.findByIdAndUpdate({_id:id},req.body);
       res.send("Data is updated");
    }catch(err){
        res.send({"msg":err.message});
    }
})

module.exports = { inventoryRouter };