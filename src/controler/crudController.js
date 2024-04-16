const productModel = require("../model/producrModel");
exports.Create=async (req,res)=>{
try {
    let reqbody=req.body;
    await productModel.create(reqbody)
    res.status(200).json({status:"Success",message:"Request completed"})


}catch (e){
        res.status(200).json({err:e.toString()})
    }

}

exports.Read=async (req,res)=>{
    try {

       let Row =await productModel.find()
        res.status(200).json({status:"Success",message:"Request completed",row:Row})


    }catch (e){
        res.status(200).json({err:e.toString()})
    }

}

exports.readbyId=async (req,res)=>{
    try {
        let {id}=req.params;
        let Row =await productModel.find({_id: id})
        res.status(200).json({status:"Success",message:"Request completed",row:Row})


    }catch (e){
        res.status(200).json({err:e.toString()})
    }

}

exports.Update=async (req,res)=>{
    try {
        let {id}=req.params;
        let reqBody=req.body;

        await productModel.updateOne({_id:id},reqBody);
        res.status(200).json({status:"Success",message:"Request completed"})


    }catch (e){
        res.status(200).json({err:e.toString()})
    }
}

exports.Delete=async (req,res)=>{

    try {
        let {id}=req.params;


        await productModel.deleteOne({_id:id});
        res.status(200).json({status:"Success",message:"Request completed"})


    }catch (e){
        res.status(200).json({err:e.toString()})
    }
}