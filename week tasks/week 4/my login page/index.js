const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const userRouter = require('./routes/userRouter');
const session = require('express-session');
const nocache = require('nocache');

app.set('view engine','hbs');
app.set('views','./views');


app.use(express.json()); 
app.use(express.urlencoded({extended : false}));

app.use(express.static('public'))

app.use(nocache());
app.use(session({
    secret : process.env.SECRET,
    resave : false, // False to avoid saving session back to the store if it wasn't modified.
    saveUninitialized:true //true to save a new but unmodified session.
}))


app.use('/',userRouter);

// server
app.listen(port,()=>{
    console.log(`running port ${port}`);
})