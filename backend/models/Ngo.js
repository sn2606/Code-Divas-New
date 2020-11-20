const mongoose = require('mongoose')

const ngoSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique:true
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
        required: true
    },
    location:{
        type:String,
        required: true
    },
    aim:{
        type:String,
        required: true
    }
},{timestamps:true});

const Ngo = mongoose.model("ngo",ngoSchema);
module.exports = Ngo