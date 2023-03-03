const mongoose = require("mongoose")

const userSchema=new mongoose.Schema({
    user_name:{type:String,required:true},
    email:{type:String,required:true},
    user_type:{type:String,required:true},
    password:{type:String,required:true},
    phone_number:{type:Number,required:true},
    verified:{type:String,required:true},
    country_code:{type:Number,required:true}
},{
    timestamps:true
})

const UserModel=mongoose.model("user",userSchema)


module.exports={UserModel}