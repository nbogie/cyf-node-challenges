// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
//load the quotes JSON
const Quotes = require("../quotes.json");
const bodyParser = require("body-parser").urlencoded({ extended: true });
const cors = require("cors");
app.use(cors());
// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
// app.get("/", function(request, response) {
//   response.sendFile(__dirname + "/public/index.html");
// });

//START OF YOUR CODE...
let search = "";
let mySearch = [];
// app.get("/quotes/search", function(request, response) {
//   response.sendFile(__dirname + "/public/index.html");
// });
app.get("/quotes", function(request, response) {
  response.send(Quotes);
});
app.get("/quotes/random", function(request, response) {
  response.send(pickFromArray(Quotes));
});

app.post("/quotes/search/:param1", bodyParser, (req, res) => {
  console.log(typeof req.params.param1);
  search = req.params.param1;
  console.log(search);
  searchWord(search);
  res.end("done");
});

function searchWord(quote) {
  mySearch = Quotes.filter(item => {
    return item.quote.search(quote) >= 0;
  });
  console.log(mySearch);
}
app.get("/quotes/search", (req, res) => {
  res.send(mySearch);
});
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT || 3200, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
