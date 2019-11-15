const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const PORT = process.env.PORT || 5000;
const router = require("./rouetr.js");
const cors = require("cors");
let mongoose = require("mongoose");
let MsgSchema = require("./modules");
mongoose.connect("mongodb://localhost/chat-app", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connencted to mongodb!");
  }
});
let Chat = mongoose.model("Message", MsgSchema);
app.use(router);
app.use(cors());
let users = [];
let offline = [];
io.sockets.on("connection", socket => {
  function updateMsg() {
    Chat.find({}, (err, docs) => {
      if (err) throw err;
      console.log("loading messages");
      io.emit("new message", docs);
    });
  }
  console.log("new user is connected");
  socket.on("delete msg", id => {
    Chat.deleteOne({ _id: id }, (err, msg) => {
      if (err) throw err;
      console.log("success delete");
    });
  });
  socket.on("update msg", (id, data) => {
    console.log(data);

    Chat.updateOne({ _id: id }, { message: data }, (err, res) => {
      if (err) throw err;
      console.log("success update");
      updateMsg();
    });
  });

  socket.on("new user", (data, callback) => {
    if (users.indexOf(data) !== -1) {
      callback(false);
    } else {
      callback(true);
      socket.newUser = data;
      console.log(socket.newUser);
      users.push(socket.newUser);

      // users[socket.newUser] = socket;
      updateUsers();
    }
  });
  function updateUsers() {
    console.log(users, "users");
    console.log(offline, "offline");

    io.sockets.emit("users name", users, offline);
  }
  socket.on("send message", (data, name) => {
    console.log(data);

    let newMsg = new Chat({ message: data, name: name });
    newMsg.save(error => {
      if (error) throw error;
      updateMsg();
      console.log("success add msg");
    });
  });

  socket.on("disconnect", () => {
    console.log("there is user was left!");
    if (!socket.newUser) return;
    users.splice(users.indexOf(socket.newUser), 1);
    if (
      offline.indexOf(socket.newUser) === -1 &&
      users.indexOf(socket.newUser) > 0
    ) {
      offline.push(socket.newUser);
    }

    updateUsers();
  });
  updateMsg();
});

server.listen(PORT, () =>
  console.log(`your server is running on port: ${PORT}`)
);
