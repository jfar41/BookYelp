var mongoose = require('mongoose');
var bookSchema = new mongoose.Schema({
    text: String
});

var bookmarkSchema = new mongoose.Schema({
    content: String,
    userName: String,
    user: String
})

var readerSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    books: [bookSchema],
    reviews: [bookmarkSchema],
    googleId: String
});

module.exports = mongoose.model('Reader', readerSchema)