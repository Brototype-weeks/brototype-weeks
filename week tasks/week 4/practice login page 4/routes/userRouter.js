const express = require("express");
const router = express.Router();

const name = "admin@gmail.com";
const pass = "123";

router.get("/", (req, res) => {
  if (req.session.isLoggedIn) {
    res.render("home");
  } else {
    res.redirect("/login");
  }
});

router.get("/login", (req, res) => {
  if(req.session.isLoggedIn) {
    res.redirect("/");
  }else{
    res.render("login",{message:req.session.message});
  }
});

router.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/login")
    
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  if(req.session.isLoggedIn) {
    res.redirect("/");
  }else{
    if (name === email && pass === password) {
      req.session.isLoggedIn = true;
      res.redirect("/");
      console.log(req.session)
    } else {
      req.session.message = true;
      res.redirect("/login");
    }
  }
});

module.exports = router;