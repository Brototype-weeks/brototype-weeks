
const User = require('../models/userModel')


// admin login authenticatinv
const checkAdmin = async (req, res,next)=>{
  try {
      
      const admin = await User.findOne({email:req.body.email})

      if (admin) {
          if (admin.password == req.body.password) {
            if (admin.isAdmin) {
            req.session.admin = req.body.email
            res.redirect('/admin/dashboard')
            }else{
              req.flash('msg','email not allowed');
              res.redirect('/admin')
            }
          }else{
            req.flash('msg','invalid password');
            res.redirect('/admin')
          }

      }else{
        req.flash('msg','it is not permission email');
        res.redirect('/admin')
        next();
      }

    
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
    
  checkAdmin

}