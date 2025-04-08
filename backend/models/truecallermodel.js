let mongoose = require('mongoose');


let truecallerSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        
    },
    phone:{
        type:Number,
        require:true,
    },
    adress:{
       type:String,
       require:true
    }

})


let truecallerModel = mongoose.model("truecaller",truecallerSchema)
module.exports = truecallerModel;