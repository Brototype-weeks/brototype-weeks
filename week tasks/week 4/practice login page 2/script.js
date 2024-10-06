const express = require("express");
const app = express();
const session =require('express-session')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("views"));

// session

app.use(session({
    secret:"Your secrete key",
    resave:true,
    saveUninitialized:true
}));



const emailDB = "brototype@gmail.com";
const passwordDB = "123";

app.post("/login",(req,res)=>{
    console.log(req.body);
    const {email, password} = req.body;

    if (email === emailDB && password === passwordDB) {
        res.send("login successfully");
    }else{
        res.send("Login failed");
    }
});

const PORT = process.env.PORT || 3000;


app.listen(PORT);
