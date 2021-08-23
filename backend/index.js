//required part
const express = require("express");
const app = express()
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require('cors')


//dot env part
const port = process.env.PORT || 8080 //get the port from .env file
const urlOfMongo = process.env.MONGO_URL //get the mongo url from .env file

//pase the body the global middleware part
app.use(express.json({limit: "250mb"}));
app.use(express.urlencoded({ extended: true, limit: '250mb'}));
app.use(express.static('public'))
app.use(cors())

//create the server 
app.listen(port, () => {console.log(`Server is running on ${port}`)})

//connected to the database
mongoose.connect(urlOfMongo, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {console.log(`Server is conntected to the data base`);})
.catch(err => {console.log(err);})

//root route
app.get("/", (req, res) => {
    res.send("Hello I am from root")
})

//other's route



//default route
app.get("*", (req, res) => {
    res.status(404).send("404 page not found")
});


