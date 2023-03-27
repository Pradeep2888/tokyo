const express=require("express")
const { CampaignModel } = require("../models/CampaignModel")
const campaignRouter=express.Router()
const jwt=require("jsonwebtoken")
require("dotenv").config()


campaignRouter.get("/",async (req,res)=>{
    const data=await CampaignModel.find()
    res.send({"data":data})
})

campaignRouter.get("/pagination",async (req,res)=>{
    const {page,limit}=req.query
    const data=await CampaignModel.find().skip((page-1)*limit).limit(limit)
    const length=await CampaignModel.find()
 
    res.send({"totla_length":length.length,"data":data})
})

campaignRouter.post("/post",async (req,res)=>{
    const {
        brief_discription,
        budget,
        campaignname,
        campaigntype,
        categories,
        categoriesdetail,
        date,
        desirablecampagingoal,
        languages,
        location,
        mandetorycampagingoal,
        no_of_praposals,
        other_link,
        platform,
        audienceage,
        gender,
        reference_contact_link,
        reference_influencer_link,
        websitelink}=req.body.data
        const token=req.body.headers.Authorization.split(" ")[1]
        const detail=jwt.verify(token,process.env.SECRET_KEY)
        const user_id=detail.user_detail. user_id
       
        const new_campaign=new CampaignModel({
        user_id,  
        brief_discription,
        budget,
        campaignname,
        campaigntype,
        categories,
        categoriesdetail,
        date,
        desirablecampagingoal,
        languages,
        location,
        mandetorycampagingoal,
        no_of_praposals,
        other_link,
        platform,
        audienceage,
        gender,
        reference_contact_link,
        reference_influencer_link,
        websitelink
        })

        try{
          await new_campaign.save()
          res.send("campaign post successfully")
        }
        catch(err){
            console.log(err)
            res.send("campaign not successfully")
        }

})

module.exports={campaignRouter}