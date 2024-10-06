const express = require('express')
const admin_route = express();
const adminController = require('../controllers/adminController')
const adminMiddleware = require('../middleware/adminMiddleware')
const session = require('express-session')
const flash = require('connect-flash');
const nocache = require('nocache');
require('dotenv').config()

admin_route.use(nocache())
admin_route.use(session({
    secret : process.env.SECRET,
    resave : false, 
    saveUninitialized:true 
}))

admin_route.use(flash())


admin_route.set('view engine','ejs');
admin_route.set('views','./views/admin');


admin_route.use(express.json());
admin_route.use(express.urlencoded({extended:true}));


// router
admin_route.get('/',adminController.loadAdminLogin)
admin_route.get('/dashboard',adminController.dashboard)
admin_route.get('/logout',adminController.logout)
admin_route.get('/addUser',adminController.loadAddUser)
admin_route.get('/update',adminController.loadAdminUpdateUser)
admin_route.get('/delete',adminController.adminDeleteUser)


admin_route.post('/adminlogin',adminMiddleware.checkAdmin, adminController.isVerifyadmin)
admin_route.post('/addUser',adminController.adminInsertUser)
admin_route.post('/update',adminController.adminUpdateUser)
admin_route.post('/search',adminController.search)


module.exports = admin_route;