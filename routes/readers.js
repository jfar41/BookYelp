var express = require('express');
var router = express.Router();
var readersCtrl = require('../controllers/readers');

/* GET /readers */
router.get('/', readersCtrl.index);
router.get('/library', isLoggedIn, readersCtrl.library);
router.get('/books', isLoggedIn, readersCtrl.newBook);
router.post('/books', isLoggedIn, readersCtrl.addBook);

//DELETE /books/:id
router.delete('/books/:id', isLoggedIn, readersCtrl.delBook);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
