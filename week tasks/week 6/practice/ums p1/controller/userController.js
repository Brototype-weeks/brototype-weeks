const User = require('../model/userModel')

// load register page
const loadRegister = async (req,res) => {
    try {
        res.render('register')
    } catch (error) {
        console.log(error);
        
    }
}

// insert user

const insertUser = async(req,res) =>{
    try {
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password
        })

        const userData = await user.save();
        if (userData) {
            res.redirect('./login')
        }else{
            res.redirect('./register')
        }
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    loadRegister,
    insertUser,
}