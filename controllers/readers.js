const Reader = require('../models/reader');

module.exports = {
    index,
    addBook,
    delBook
}

function index(req, res, next) {
    console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Reader.find(modelQuery)
    .sort(sortKey).exec(function(err, readers) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('readers/index', { readers, name: req.query.name, sortKey });
      res.render('readers/index', {
          readers,
          user: req.user,
          name: req.query.name,
          sortKey
      });
    });
}

function addBook() {

}

function delBook() {

}