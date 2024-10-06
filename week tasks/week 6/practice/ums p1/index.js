const mongose = require('mongoose');
mongose.connect("mongodb://127.0.0.1:27017/USM_p-1");
// mongodb://127.0.0.1:27017/

const express = require('express');
const app = express();

const user_router = require('./routes/userRouter')

app.use(express.static('public'))

app.use('/',user_router)



app.listen(4000,()=>{
    console.log('port running');
    
})