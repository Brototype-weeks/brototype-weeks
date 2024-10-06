const express = require('express');
const app = express();
const session = require('express-session')
const nocache = require('nocache')

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use(express.static('public'));


app.use(nocache())
app.use(session({
    secret : 'hai',
    resave : false,
    saveUninitialized: true
}))

const emailName = 'admin@gmail.com';
const  pass  = '123'


app.set('view engine', 'hbs');
app.set('views', './views')


app.get('/',(req,res)=>{
    if (req.session.user) {
        res.render('home',{emailName : emailName})
    }else{
    res.redirect('/login')
    }
    
})

app.get('/login',(req,res)=>{
if (req.session.user) {
    res.redirect('/')
}else{
    res.render('login',{message:req.session.message})

}
})

app.post('/login',(req,res)=>{
    const {email, password } = req.body;
    console.log(req.body);
    if (req.session.user) {
        res.redirect('/')
    }else{
        
    if (email === emailName && password === pass ) {
            req.session.user = true
        res.redirect('/')
        console.log(req.session);
        
    }else{
        req.session.message = true
        res.redirect('/login')
    }
    }
})

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login')
})

app.listen(3000,console.log('running 3000'))
