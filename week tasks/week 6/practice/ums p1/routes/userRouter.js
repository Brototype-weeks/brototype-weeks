const express = require('express');
const user_router = express();
const userController = require('../controller/userController')

user_router.set('view engine','ejs');
user_router.set('views','./views/user');

user_router.get('/register',userController.loadRegister);
user_router.post('/register',userController.insertUser)


module.exports = user_router;
