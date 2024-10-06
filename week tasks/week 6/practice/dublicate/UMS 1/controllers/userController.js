const userModel = require("../models/userModel");
const User = require("../models/userModel");


// load register 
const loadRegister = async (req, res) => {
  try {
    if (req.session.user) {
      res.redirect('/homePage')
    } else {
      const msg = req.flash("msg");

      res.render('register',{msg})
    }
  } catch (error) {
    console.log(error.message);
  }
};

// insert user
const insertUser = async (req, res) => {
  try {
    const Existuser = await User.findOne({email:req.body.email})
        if (Existuser) {
            req.flash("msg","user alredy exist")
       return res.redirect('/register')
        } 

    console.log(req.body.email);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      is_admin: 0,
    });

    const userData = await user.save();

    if (userData) {
      // req.flash("msg", "Signup sussess!");
      res.redirect("/login");
    } else {
      res.redirect("/register");
    }
  } catch (error) {
    console.log(error.message);
  }
};



// veirfy the user login
const isVerify = async (req, res,next)=>{
  try {
    if (req.session.user) {
      return res.redirect('/homePage')
    }
    next()
  } catch (error) {
    console.log(error);
  }
}




//load login page
const loadLogin = async (req, res) => {
  try {
    if (req.session.user) {
      res.redirect('/homePage')
    } else {
      const msg = req.flash("msg");
      res.render('login',{msg})
    }

  } catch (error) {
    console.log(error.message);
  }
};


//load homePage

const homePage = async (req, res)=>{
  try {
    if (req.session.user) {
      res.render('homePage')
    }else{
      res.redirect('/login')
    }
  } catch (error) {
    console.log(error);
  }
}

// load logout 

const logout = async (req, res )=>{
  try {
    req.session.destroy();
    res.redirect('/login')
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  loadRegister,
  insertUser,
  loadLogin,
  homePage,
  logout,
  isVerify

};
