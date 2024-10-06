const express = require('express')
const user_route = express();                 
const userController = require('../controllers/userController');
const userMiddleware = require('../middleware/userMiddleware')
const session = require('express-session')
const flash = require('connect-flash');
const nocache = require('nocache');
require('dotenv').config()

user_route.use(nocache())
user_route.use(session({
    secret : process.env.SECRET,
    resave : false, 
    saveUninitialized:true 
}))

user_route.use(flash())

//view engine 
user_route.set('view engine','ejs');
user_route.set('views','./views/users')  

user_route.use(express.json());
user_route.use(express.urlencoded({extended:true}))


// routes
user_route.get('/register',userController.loadRegister)
user_route.post('/register',userController.insertUser)
user_route.get('/login', userController.loadLogin) 
user_route.post('/login',userMiddleware.isAuthenticate,userController.isVerify) 
user_route.get('/homePage',userController.homePage)
user_route.get('/logout',userController.logout)



module.exports = user_route;