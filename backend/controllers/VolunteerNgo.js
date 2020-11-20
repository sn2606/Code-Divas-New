const VolunteerNgo = require('../models/VolunteerNgo')

//Funtion to show list of all volunteers
const index = (req,res,next)=>{
    VolunteerNgo.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/volunteerngo.js file 1 '
        })
    })
}

const store = (req,res,next)=>{
    let person = new VolunteerNgo({
        name: req.body.name,
        email: req.body.email,
        adhar: req.body.adhar,
        wdays: req.body.wdays,
        phNumber: req.body.phNumber,
        whours: req.body.whours,
        wexp: req.body.wexp,
    });
    person.save()
    .then(response =>{
        res.json({
            message: 'Volunteer added successfully'
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/volunteerngo.js file 2'
        })
    })


};

module.exports ={
    index,store
}