let truecallerModel = require('../models/truecallermodel')


let createData = async(req,res)=>{
    let data = new truecallerModel(req.body);
    console.log("data",data)
    await data.save();
    res.send({success:true,messag:"successfully created data",data:data})

    console.log("createData");
}

let readData = async(req,res)=>{
    let data = await truecallerModel.find({});
    res.send({success:true,message:"successfully reading the data",data:data})
    console.log("readData");

}

let updateData = async(req,res)=>{
    let {id,...rest} = req.body;
    const data = await truecallerModel.updateOne({_id:id},rest);
    res.send({success:true,message:"data updated successfully",data:data});
    console.log("updating",rest);
}

let deleteData =async(req,res)=>{
    let id = req.params.id;
    let data = await truecallerModel.findByIdAndDelete(id)
    console.log("deleted");
}

module.exports = {readData,updateData,deleteData,createData}