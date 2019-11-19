const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BokingSchema = new Schema({
  title: String,
  firstName: String,
  surname: String,
  email: String,
  roomId: Number,
  checkInDate: String,
  checkOutDate: String
});

module.exports = mongoose.model("Bokings", BokingSchema);
