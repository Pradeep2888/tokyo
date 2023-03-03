const express = require("express");
const { UserModel } = require("../models/UserModel");
const registerRouter=express.Router()
const bcrypt = require('bcrypt');

registerRouter.get("/",(req,res)=>{
    res.send("welcome to register route")
})

registerRouter.post("/add-user",async (req,res)=>{

    let {user_name,email,password,phone_number,user_type,country_code}=req.body
    
    const isUser = await UserModel.findOne({email})

    if(isUser){
        res.send({"msg" : "User already exists"})
    }
    else {
        bcrypt.hash(password, 4, async function(err, hash) {
        if(err){
            res.send({"msg":"Something went wrong"})
        }
        const new_user=new UserModel({
            user_name,
            email,
            password:hash,
            phone_number:phone_number?phone_number:phone_number=123456789,
            country_code:country_code?country_code:country_code=0,
            user_type,
            verified:false
        })
        try{
            await new_user.save()
            res.send({"msg" : "Sign up successfull"})
        }
        catch(err){
            console.log(err)
            res.send({"msg" : "Something went wrong"})
        }
    });

}
})

module.exports={registerRouter}