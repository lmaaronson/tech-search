var exports = module.exports = {}


exports.signup = function(req,res){

    console.log('sign up page')

}

exports.signin = function(req,res){

    console.log("sign in page")

}

exports.dashboard = function(req,res){
    
    console.log("dashboard")

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}