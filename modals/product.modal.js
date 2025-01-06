import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
description:{
required:true,
type:String
},
name:{
required:true,
type:String
}
ProductImage:
{
type:String
},
price:
{
type:Numbers,
default:0
},
stock :{
default:0,
type:Number
},
category:{
type:mongoose.Schema.typesObjectId,
ref:"Category",
required:"true"
}
owner:{
type:mongoose.Schema.typesObjectId,
ref:"User"
}
