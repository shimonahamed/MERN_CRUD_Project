const mongoose=require('mongoose')
const ProductSchema=mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    discount:{type:String,required:true},
    discount_price:{type:Number,required:true},


},{timestamps:true,versionKey:false})

let productModel=mongoose.model('products',ProductSchema);

module.exports=productModel;