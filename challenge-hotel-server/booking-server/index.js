const express = require("express");
const app = express();
const PORT = process.env.PORT || 3200;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./router");
const Bokings = require("./modules");
mongoose.connect(
  "mongodb://localhost/BokingDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  err => {
    if (err) throw err;
    console.log("your database is connected");
  }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router(app);

app.use(cors());
app.listen(PORT, () => {
  console.log(`Your browser running on port ${PORT}`);
});
