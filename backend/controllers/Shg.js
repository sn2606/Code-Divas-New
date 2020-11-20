const Shg =  require('../models/Shg')

//Funtion to show list of all individuals
const index = (req,res,next)=>{
    Shg.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/shg.js file 1 '
        })
    })
}

//Function to find a single individual
const show = (req,res,next)=>{
    let username = req.body.username
    Shg.findById(username)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/shg.js file 2 '
        })
    })
}

//Function to add employee to database
const store = (req,res,next)=>{
    let shg = new Shg({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phNumber: req.body.phNumber,
        location: req.body.location,
    });
    shg.save()
    .then(response =>{
        res.json({
            message: 'SHG added successfully'
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/shg.js file 3'
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
    };

    Shg.findByIdAndUpdate(username, {$set: updateData})
    .then(response =>{
        res.json({
            message: 'Shg updated successfully'
        })
    })
    .catch (error =>{
        res.json({
            message: 'Error in Controller/shg.js file 3'
        })
    })
};

module.exports = {
    index, show, update, store
}