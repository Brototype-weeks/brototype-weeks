const express = require('express');
const nocache = require('nocache');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const userRouter = require('./routes/userRouter');
const app = express();

const port = process.env.PORT;

app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
app.use(nocache());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use('/',userRouter);
app.listen(port,()=>{
  console.log(`Server listening on port ${port}`);
});