const express = require("express");
const route = express.Router;
module.exports = function(app) {
  let bokingsList = require("./controller");
  app
    .route("/bokings")
    .get(bokingsList.all_Bokings)
    .post(bokingsList.create_new_Boking);

  app
    .route("/bokings/:bokingId")
    .get(bokingsList.read_one_Boking)
    .put(bokingsList.edit_boking)
    .delete(bokingsList.delete_one_Boking);
};
