const express = require('express');
const app = express();
const userRouter  = require('./routes/userRouter')
require('dotenv').config();
const session = require('express-session');
const nocache = require('nocache')

const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

 app.use(express.static('public'));

 app.set('view engine', 'hbs');
 app.set('views','./views');

 app.use(nocache());

 app.use(session({

    secret : '7gK9P3qRbmhvmbFt6W2sL',
    resave : false,
    saveUninitialized : true
 }))

 app.use('/',userRouter)

app.listen(port,()=>{
    console.log(`port runnig ${port}`);
})
