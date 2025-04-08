const userModel = require("../models/usermodel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const signUp = async(req,res)=>{
    try{
          let {name,email,password} = req.body;
          const user = await userModel.findOne({email});
          if(user) {
            return res.status(409).
            json({message:"user is already exhist, yoou can login",success:false})
          }
          const UserModel  = new userModel({name,email,password});
          UserModel.password = await bcrypt.hash(password,10);
          await UserModel.save();
   res.send({status:201,message:"SignUp successfully",success:true});
    }
    catch(error){
        res.send({status:500,message:"Internal server error" , success:false});
    }
}

const login = async(req,res)=>{
    try{
          let {email,password} = req.body;
          const user = await userModel.findOne({email});
          if(!user) {
            return res.status(403).
            json({message:errorMsg,success:false});
          }
    const isPassEqul = await bcrypt.compare(password,user.password);
    if(!isPassEqul){
        return res.status(403).
            json({message:errorMsg,success:false});
    }
    let JWT_SECRET = "vishalgouli123"
   const jwtToken = jwt.sign(
    {email:user.email,_id:user._id},
    JWT_SECRET,
    {expiresIn:'24h'}
   )

   res.status(200).
   json({
    message:"Login Successfully",
    success:true,
    jwtToken:jwtToken,
   email:user.email,
   name:user.name
   })

    }
    catch(error){
        res.send({status:500,message:"user name or password not matched" , success:false});
    }
}

// module.exports = { signUp, login  };



// const truecallerModel = require('../models/usermodel');


let createData = async(req,res)=>{
    // let data = new truecallerModel(req.body);
    // console.log("data",data)
    // await data.save();
    // res.send({success:true,messag:"successfully created data",data:data})

    console.log("createData");
}

let readData = async(req,res)=>{
    // let data = await truecallerModel.find({});
    // res.send({success:true,message:"successfully reading the data",data:data})
    console.log("readData");

}

let updateData = async(req,res)=>{
    // let id = req.params.id;
    // console.log(id);
    console.log("updating");
    

}

let deleteData =async(req,res)=>{
    // let id = req.params.id;
    // let data = await truecallerModel.findByIdAndDelete(id)
    console.log("deleting");
}
module.exports = {signUp,login};

