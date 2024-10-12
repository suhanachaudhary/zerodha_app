const mongoose = require("mongoose");

const { Schema }=require("mongoose");

const UserSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    createdAt: {
        type: Date,
        default: new Date(),
      },
    //   token:{
    //     type:String,
    // }
    
});

const User=mongoose.model("User",UserSchema);
module.exports= User;