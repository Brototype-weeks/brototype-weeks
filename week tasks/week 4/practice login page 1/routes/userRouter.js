const express = require('express');
const router   = express.Router();

const  emailname = 'admin@gmail.com';
const   pass     = "123";

router.get('/',(req,res)=>{
    if (req.session.user) {
        res.render('home', {userName : emailname})
    }else{
    res.redirect('/login')

    }
})

router.get('/login',(req,res)=>{
    if (req.session.user) {
        res.redirect('/')
    }else{
        res.render('login')
    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login')
})

router.post('/login',(req,res)=>{
   const {email,password} = req.body;
   console.log(req.body);
        if (req.session.user) {
            res.render('home')
        }else{
            if (emailname === email && pass === password) {
                req.session.user = true
                res.redirect('/')
                console.log(req.session);
            }else{
                // req.session.user = true;
                res.redirect('/login')
            }
        }
})

module.exports = router;

