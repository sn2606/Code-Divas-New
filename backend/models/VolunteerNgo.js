const mongoose = require('mongoose')

const voluteerNgoSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique: true
    },
    adhar:{
        type:String,
        unique:true
    },
    phNumber:{
        type:String,
        required:true
    },
    wdays:{
        type:Number,
        required:true
    },
    whours:{
        type:Number,
        required:true
    },
    wexp:{
        type:Number,
        required:true
    }
},{timestamps:true});

const VolunteerNgo = mongoose.model("volunteerNgo",voluteerNgoSchema);
module.exports = VolunteerNgo