const Reader = require("../models/reader");

module.exports = {
  create,
  update
};
function update(req, res) {
  console.log('hitting update function');
  Reader.findById(req.params.id, function(err, reader) {
    let review = reader.reviews.id(req.params.reviewId);
    review.content = req.body.content;
    console.log(review);
    reader.save(function(e){
      res.redirect(`back`);
    })
  })
}
function create(req, res) {
  console.log(req.params.id);
  Reader.findById(req.params.id, function (err, reader) {
    req.body.userId = req.user._id;
    if (err) {
      console.log(err);
    }
    // console.log(reader);
    req.body.userName = req.user.name;
    //ADD the review
    console.log(req.body);
    reader.reviews.push(req.body);
    reader.save(function (err) {
      res.redirect("/readers/library");
    });
  });
}