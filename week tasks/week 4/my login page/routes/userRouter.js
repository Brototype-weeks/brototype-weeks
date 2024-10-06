const express = require('express');
const router   = express.Router();

const emailname = "admin@gmail.com";
const pass = "123";

router.get('/',(req,res)=>{
        if (req.session.loggedIn) {
                res.render('home',{emailname:emailname})
        }else{ 
            res.redirect('/login')
        }
});


router.get('/login',(req,res)=>{
    if (req.session.loggedIn) {
        res.redirect('/')
    }else{
        res.render('login',{message:req.session.message})
    }
})


router.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login')
})


router.post('/login',(req,res)=>{
   const { email , password } = req.body;
   console.log(req.body);
   if (req.session.loggedIn) {
     res.redirect('/');
   }else{
    if (emailname === email && pass === password) {
        req.session.loggedIn = true;
        res.redirect('/')
        console.log(req.session);
    }else{
        req.session.message = true;
        res.redirect('/login')
    }
   }
})


module.exports = router;