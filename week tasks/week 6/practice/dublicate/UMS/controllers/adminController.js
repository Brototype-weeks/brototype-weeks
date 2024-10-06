const User = require("../models/userModel");
// const { search } = require('../routes/adminRoute');
const bcrypt = require('bcrypt');

// load login page
const loadAdminLogin = async (req, res) => {
  try {
    if (req.session.admin) {
      res.redirect("/admin/dashboard");
    } else {
      console.log("admin page loaded");
      const msg = req.flash("msg");
      res.render("login", { msg });
    }
  } catch (error) {
    console.log(error);
  }
};

// veirfy the user login
const isVerifyadmin = async (req, res) => {
  try {
    if (req.session.admin) {
      res.redirect("/admin/dashboard");
    } else {
      res.redirect("/admin");
    }
  } catch (error) {
    console.log(error);
  }
};


// search
const search = async (req, res) => {
  try {
    const userN = req.body.search;
    console.log(req.body.search);
    req.session.detailes = userN;
    res.redirect("/admin/dashboard");
  } catch (error) {
    console.log(error);
  }
};

// load dashboard
const dashboard = async (req, res) => {
  try {
    if (req.session.admin) {
      if (req.session.detailes) {
        const userDetailes = req.session.detailes;
        req.session.detailes = "";
        const regexName = new RegExp(`^${userDetailes}`, "i");
        const userData = await User.find({ $and:[{name: { $regex: regexName } },{ isAdmin: 0 }]});
        console.log(userData);
        const adminEmail = req.session.admin;
        const msg = req.flash("msg");
        res.render("dashboard", { user: userData, adminEmail, msg });
      } else {
        const adminEmail = req.session.admin;
        console.log(adminEmail);
        const userData = await User.find({ isAdmin: 0 });
        const msg = req.flash("msg");
        res.render("dashboard", { user: userData, adminEmail, msg });
      }
    } else {
      res.redirect("/admin");
    }
  } catch (error) {
    console.log(error);
  }
};

// // load dashboard
// const dashboard = async(req, res)=>{
//     try {
//         if (req.session.admin) {
//             const userData = await User.find()
//             const adminEmail = req.session.admin
//             console.log(adminEmail);
//             const msg = req.flash('msg')
//             res.render('dashboard',{user:userData,adminEmail,msg})
//         }else{
//             res.redirect('/admin')
//         }
//     } catch (error) {
//         console.log(error);

//     }
// }

// // load dashboard
// const dashboard = async(req, res)=>{
//     try {
//         if (req.session.admin) {
//             const userData = await User.find()
//             const adminEmail = req.session.admin
//             console.log(adminEmail);
//             const msg = req.flash('msg')
//             res.render('dashboard',{user:userData,adminEmail,msg})
//         }else{
//             res.redirect('/admin')
//         }
//     } catch (error) {
//         console.log(error);

//     }
// }

//logout

const logout = async (req, res) => {
  try {
    req.session.destroy();
    res.redirect("/admin");
  } catch (error) {
    console.log(error);
  }
};

// load addUser

const loadAddUser = async (req, res) => {
  try {
    if (req.session.admin) {
      const msg = req.flash("msg");
      res.render("addUser", { msg });
    }
  } catch (error) {
    console.log(error);
  }
};

// admin insert user
const adminInsertUser = async (req, res) => {
  try {
    const Existuser = await User.findOne({ email: req.body.email });
    if (Existuser) {
      req.flash("msg", "user already exist");
      return res.redirect("/admin/addUser");
    }
    console.log(req.body.email);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
      is_admin: 0,
    });

    const userData = await user.save();

    if (userData) {
      res.redirect("/admin/addUser");
    }
  } catch (error) {
    console.log(error);
  }
};

// load adminUpdateUser

const loadAdminUpdateUser = async (req, res) => {
  try {
    const userId = req.query.id;
    const userData = await User.findById({ _id: userId });
    if (req.session.admin) {
      res.render("update", { user: userData, userId });
    }
  } catch (error) {
    console.log(error);
  }
};

// admin Update User

const adminUpdateUser = async (req, res) => {
  try {
    const { name, email, phone, password, userId } = req.body;
    console.log(req.body);

    let updatedData = { name, email, phone };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }


    const userData = await User.findByIdAndUpdate(
      { _id: userId },
      // { $set: { name: name, email: email, phone: phone, password: password } }
      { $set: updatedData }
    );
    console.log(userData);
    if (req.session.admin) {
      res.redirect("/admin/dashboard");
    }
  } catch (error) {
    console.log(error);
  }
};

// admin delete user
const adminDeleteUser = async (req, res) => {
  try {
    const userId = req.query.id;
    console.log(userId, "id check");
    const userData = await User.findByIdAndDelete({ _id: userId });
    console.log(userData);

    return res.redirect("/admin/dashboard");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loadAdminLogin,
  isVerifyadmin,
  dashboard,
  logout,
  loadAddUser,
  adminInsertUser,
  adminDeleteUser,
  loadAdminUpdateUser,
  adminUpdateUser,
  search,
};
