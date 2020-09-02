var express = require('express');
var router = express.Router();
var readersCtrl = require('../controllers/readers');

/* GET /readers */
router.get('/', readersCtrl.index);
router.post('/books', readersCtrl.addBook);

//DELETE /books/:id
router.delete('/books/:id', readersCtrl.delBook);

module.exports = router;
