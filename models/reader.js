var mongoose = require('mongoose');
var bookSchema = new mongoose.Schema({
    text: String
});

var readerSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    books: [bookSchema],
    googleId: String
});

module.exports = mongoose.model('Reader', readerSchema)