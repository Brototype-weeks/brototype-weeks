const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system")


const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT 

// static file
app.use(express.static('public'))

// user Router
app.use('/',userRoute);
app.use('/admin',adminRoute)




app.listen(port,()=>{
    console.log(`port running ${port}`);
})