const mongoose = require('mongoose')

const volunteerTeachSchema = mongoose.Schema({
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
    expertise:{
        type:String,
        required:true
    },
    wexp:{
        type:Number,
        required:true
    }
},{timestamps:true});

const VolunteerTeach = mongoose.model("volunteerTeach",volunteerTeachSchema);
module.exports = VolunteerTeach