const express = require("express");
const app = express();
const port = 7500;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello"); 

});

app.listen(port, (err) => {
  err
    ? console.log("Server connection failed", err)
    : console.log("Server connected successfuly");
});
