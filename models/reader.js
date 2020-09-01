var mongoose = require('mongoose');

var reader = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    books: [bookSchema],
    googleId: String
})