const mongoose = require('mongoose')

const individualSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique: true
    },
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phNumber:{
        type:String,
        required:true
    },
    expertise:{
        type:String,
        required:true
    }
},{timestamps:true});

const Individual = mongoose.model("individual",individualSchema);
module.exports = Individual