const Individual =  require('../models/Individual')
//const {OAuth2Client} = require('google-auth-library')

//const client = new OAuth2Client("");

//Funtion to show list of all individuals
const index = (req,res,next)=>{
    Individual.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/individual.js file 1 '
        })
    })
}

//Function to find a single individual
const show = (req,res,next)=>{
    let username = req.body.username
    Individual.findById(username)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/individual.js file 2 '
        })
    })
}

//Function to add employee to database
const store = (req,res,next)=>{
    let person = new Individual({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phNumber: req.body.phNumber,
        expertise: req.body.expertise
    });
    person.save()
    .then(response =>{
        res.json({
            message: 'Individual added successfully'
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/individual.js file 3'
        })
    })
};

//Update Individual details
const update = (req,res,next)=>{
    let username = req.body.username

    let updateData = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phNumber: req.body.phNumber,
        expertise: req.body.expertise
    };

    Individual.findByIdAndUpdate(username, {$set: updateData})
    .then(response =>{
        res.json({
            message: 'Individual updated successfully'
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/individual.js file 3'
        })
    })
};

module.exports = {
    index, show, update, store
}