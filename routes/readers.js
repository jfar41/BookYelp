var express = require('express');
var router = express.Router();
var readersCtrl = require('../controllers/readers');
var reviewsCtrl = require('../controllers/reviews');

/* GET /readers */
router.get('/', readersCtrl.index);
router.get('/library', isLoggedIn, readersCtrl.library);
router.get('/books', isLoggedIn, readersCtrl.newBook);
router.post('/books', isLoggedIn, readersCtrl.addBook);
router.put('/:id/reviews/:reviewId', isLoggedIn, reviewsCtrl.update);

//DELETE /readers/:id
router.delete('/:id', isLoggedIn, readersCtrl.delBook);

//COMMENTS /
router.post('/:id/reviews', isLoggedIn, reviewsCtrl.create)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;