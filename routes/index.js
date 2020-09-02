var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/readers');
});


// User wants to log in
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

//Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    successRedirect: '/readers',
    failureRedirect: '/readers'
  }
));
//OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('readers');
})
module.exports = router;
