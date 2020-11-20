const VolunteerTeach = require('../models/VolunteerTeaching')

//Funtion to show list of all individuals
const index = (req,res,next)=>{
    VolunteerTeach.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/volunteerteach.js file 1 '
        })
    })
}

const store = (req,res,next)=>{
    let person = new VolunteerTeach({
        name: req.body.name,
        email: req.body.email,
        adhar: req.body.adhar,
        wdays: req.body.wdays,
        phNumber: req.body.phNumber,
        whours: req.body.whours,
        wexp: req.body.wexp,
        expertise: req.body.expertise,
    });
    person.save()
    .then(response =>{
        res.json({
            message: 'Volunteer added successfully'
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/volunteerteach.js file 2'
        })
    })
};

module.exports = {
    index,store
}