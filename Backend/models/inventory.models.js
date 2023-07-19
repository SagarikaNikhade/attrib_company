const mongoose = require("mongoose");
const {UserModel} = require("./user.models");
const { OemsModel } = require("./oems.models");

const inventorySchema = mongoose.Schema({
    kms:{type:Number,required:true},
    major_scratches:{type:String,required:true},
    original_paint:{type:String,required:true},
    number_of_accidents_reported:{type:Number,required:true},
    number_of_previous_buyers:{type:Number,required:true},
    registration_place:{type:String,required:true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: UserModel },
    image: { type: String, required: true },
    title: { type: String, required: true },
    description:{type:Array,required:true},
    price:{type:Number,required:true},
    oemsId:{type: mongoose.Schema.Types.ObjectId, ref: OemsModel }
},{
    versionKey:false
})


const InventoryModel = mongoose.model("inventory",inventorySchema);

module.exports={InventoryModel};