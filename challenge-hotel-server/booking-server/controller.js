const mongoose = require("mongoose");
const Bokings = mongoose.model("Bokings");

exports.all_Bokings = function(req, res) {
  Bokings.find({}, (err, boking) => {
    if (err) throw err;
    res.json(boking);
  });
};
exports.create_new_Boking = function(req, res) {
  let newBokind = new Bokings(req.body.data);
  newBokind.save((err, boking) => {
    if (err) res.send(err);
    res.json(boking);
  });
};
exports.read_one_Boking = function(req, res) {
  Bokings.findById(req.params.bokingId, (err, boking) => {
    if (err) {
      console.error(err);
      res.send(err);
    } else {
      console.log("ok");
      res.json(boking);
    }
  });
};

exports.edit_boking = function(req, res) {
  Bokings.findByIdAndUpdate(
    { _id: req.params.bokingId },
    req.body,
    { new: true },
    (err, boking) => {
      if (err) throw err;
      res.json(boking);
    }
  );
};

exports.delete_one_Boking = function(req, res) {
  console.log();

  Bokings.deleteOne({ _id: req.params.bokingId }, (err, boking) => {
    if (err) {
      throw err;
    } else if (boking.deletedCount > 0) {
      res.json({ message: "boking successfully deleted" });
    } else {
      res.json({ message: "boking to delete not found" });
    }
  });
};
