
 const User = require('../models/userModel')

  // authentication
async function isAuthenticate(req,res,next) {
  try {
      const user = await User.findOne({email:req.body.email})
      console.log(user);
      if (user) {
          if (user.password == req.body.password) {
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