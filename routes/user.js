var express = require('express');
var router = express.Router();




router.get('/auth/facebook',
  passport.authenticate('facebook'));
 
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) { 
    res.redirect('/');
  });





router.use('/login', function(req, res, next){
	res.render('login');
});


router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
});

 


module.exports = router;
