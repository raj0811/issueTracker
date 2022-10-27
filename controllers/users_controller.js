const User = require("../models/user")


module.exports.signup = function(req,res){
    return res.render('user_sign_up',{
        title: "Signup"
    })
}

module.exports.signin = function(req,res){
    return res.render('user_sign_in',{
        title: "Signin"
    })
}


// get signup data

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back')
    }

    User.findOne({email: req.body.email},function(err,user){
        if(err){console.log("error in finding user while siging up"); return}

        if(!user){
            User.create(req.body,function(err,user){

                if(err){console.log("error in creating user while siging up"); return}

                return res.redirect('/users/sign-in')
            })
        }
        else{
            return res.redirect('back')
        }
    })
}



// create session


module.exports.createSession = function(req,res){
    // todo later
}