const express = require( 'express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const morgan = require( 'morgan')
const port = process.env.PORT || 8001;

const IndividualRoute = require('./routes/Individual.js')
const NgoRoute = require('./routes/Ngo')
const ShgRoute = require('./routes/Shg')

const VolunteerTeachRoute = require('./routes/VolunteerTeach')
const VolunteerNgoRoute = require('./routes/VolunteerNgo')

const connection_url = "mongodb+srv://hackforshe:hackforshe@cluster0.untud.mongodb.net/hackforshe?retryWrites=true&w=majority";
mongoose.connect(connection_url, { useUnifiedTopology: true,useNewUrlParser: true });

mongoose.connection.on("error",(err)=>{
    console.log(err);
})
mongoose.connection.once("open", ()=>{
    console.log("Database connected successfully");
})

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    res.set('Access-Control-Allow-Methods','*');
    next();
});


app.use('/api/Individual', IndividualRoute)
app.use('/api/Ngo', NgoRoute)
app.use('/api/Shg', ShgRoute)

app.use('/volunteer/teach', VolunteerTeachRoute)
app.use('/volunteer/ngo', VolunteerNgoRoute)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})