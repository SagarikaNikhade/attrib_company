const mongoose = require("mongoose");

const oemsSchema = mongoose.Schema({
    name_of_the_model:{type:String,required:true},
    year_of_the_model:{type:Number,required:true},
    price_of_new_vehicle:{type:Number,required:true},
    colors:{type:String,required:true},
    mileage:{type:Number,required:true},
    power:{type:Number,required:true},
    max_speed:{type:Number,required:true},
    image_of_vehicle:{type:String,required:true}
},{
    versionKey:false
})


const OemsModel = mongoose.model("oems",oemsSchema);

module.exports={OemsModel};