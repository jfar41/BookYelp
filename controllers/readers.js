const Reader = require('../models/reader');

module.exports = {
    index,
    addBook,
    delBook,
    library,
    newBook
}

function newBook(req, res, next) {
    Reader.findById(req.user._id, function(err, reader) {
        res.render("readers/new", {
            reader
        })
    })
}

function library(req, res, next) {
    Reader.findById(req.user._id, function(err, reader) {
        res.render("readers/show", {
            reader
        })
    })
}

function index(req, res, next) {
    Reader.find({}, function(err, readers) {
        res.render('readers/index', {readers});
    })
}


function addBook(req, res, next) {
    console.log(req.user);
    Reader.findById(req.user._id, function(err, reader) {
        reader.books.push(req.body);
        reader.save(function(e, r) {
            if (e) {
                return res.redirect(`back`);
            } 
            res.redirect('/readers/library');
        })
    })
}
function delBook(req, res, next) {
    // console.log(req.params.id);
    Reader.findOne({ "books._id" : req.params.id }, function(err, reader) {
        reader.books.id(req.params.id).remove();
        reader.save(function(err) {
            res.redirect('/readers/library')
        })
    console.log(reader);
    });
}

// function delBook(req, res, next) {
//     Reader.findById({'books._id': req.params.id}, function(err, reader) {
//         reader.books.id(_id).remove();
//         reader.save(function(e, r) {
//             if (e) {
//             return res.redirect(`back`);
//             }
//             res.redirect('/readers/library');
//     });
//    });
// }