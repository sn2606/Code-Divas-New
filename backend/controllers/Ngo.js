const Ngo =  require('../models/Ngo.js')

//Funtion to show list of all ngos
const index = (req,res,next)=>{
    Ngo.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/ngo.js file 1 '
        })
    })
}

//Function to find a single individual
const show = (req,res,next)=>{
    let username = req.body.username
    Ngo.findById(username)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/ngo.js file 2 '
        })
    })
}

//Function to add employee to database
const store = (req,res,next)=>{
    let ngoName = new Ngo({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phNumber: req.body.phNumber,
        location: req.body.location,
        aim: req.body.aim
    });
    ngoName.save()
    .then(response =>{
        res.json({
            message: 'NGO added successfully'
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/Ngo.js file 3'
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
        location: req.body.location,
        aim: req.body.aim
    };

    Ngo.findByIdAndUpdate(username, {$set: updateData})
    .then(response =>{
        res.json({
            message: 'NGO updated successfully'
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/ngo.js file 3'
        })
    })
};

module.exports = {
    index, show, update, store
}