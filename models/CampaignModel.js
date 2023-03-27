const mongoose=require("mongoose")

const campaignSchema=new mongoose.Schema({
user_id:{type:String,require:true},
brief_discription:{type:String,require:true},
budget:{type:String,require:true},
campaignname:{type:String,require:true}, 
campaigntype:{type:String,require:true},
categories:{type:Array,require:true},
categoriesdetail:{type:String,require:true},
date:{type:String,require:true}, 
desirablecampagingoal:{type:Array,require:true},
languages:{type:Array,require:true},
location:{type:String,require:true},
mandetorycampagingoal:{type:String,require:true}, 
no_of_praposals:{type:Number,require:true},
other_link:{type:String,require:true},
platform:{type:Array,require:true},
audienceage:{type:Array,require:true},
gender:{type:String,require:true},
reference_contact_link:{type:String,require:true},
reference_influencer_link:{type:String,require:true},
websitelink:{type:String,require:true},
})

const CampaignModel=mongoose.model("campaign",campaignSchema)

module.exports={CampaignModel}