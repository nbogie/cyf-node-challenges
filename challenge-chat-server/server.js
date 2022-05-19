const express = require('express');

const app = express();
const PORT = 4000;

// app.use(express(json));


const welcomeMessage = {
    id: 0,
    name: "Maira",
    message: "Welcome to my chat!",
  };

let messages = [welcomeMessage] ;

app.get("/", (req,res) => {
    res.send(`Hello world`)
})

//show all messages
app.get("/messages", (req,res) => {
  res.send(messages);
})

//find message by id
app.get("/messages/:id", (req, res) => {
    let findMessagesById = messages.filter((message) => message.id === Number(req.params.id));
    if (findMessagesById) {
        res.status(200).send(findMessagesById)
    }else{
        res.send(404)
    }
})

//delete message by id
app.delete("/messages/:id", (req,res) => {
    let findMessagesIndex = messages.findIndex((message) => message.id === Number(req.params.id));
    if (findMessagesIndex > -1) {
        res.json(messages[findMessagesIndex]);
        messages.splice(findMessagesIndex, 1)
    }else {
        res.sendStatus(404);
    }

})

app.listen(PORT, () => {
    console.log(`Listen on ${PORT} `)
})