

const mongoose = require('mongoose');

let dbconnection = ()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/LoginRegister");
        console.log("successfully connected to backend");
    }catch(error){
        console.log(error);
    }
}

module.exports = dbconnection;