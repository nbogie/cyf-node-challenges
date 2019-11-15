let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let MsgSchema = new Schema({
  name: String,

  message: String,
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = MsgSchema;
