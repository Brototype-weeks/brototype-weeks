
 const User = require('../models/userModel')
 const bcrypt = require('bcrypt');

  // authentication
async function isAuthenticate(req,res,next) {
  try {
      const user = await User.findOne({email:req.body.email})
      console.log(user);
      if (user) {
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
          if (passwordMatch) {
              req.session.user = req.body.email
              console.log(req.session.user);
              res.redirect('/homePage')
          }else{
              req.flash('msg','invalid password');
              res.redirect('/login')
          }
      }else{
          req.flash('msg','invalid email');
          res.redirect('/login')
          next();
      }
  } catch (error) {
      console.log(error);
      
  } 
}



module.exports = {
  isAuthenticate,
   

}