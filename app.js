var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("hello!");
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, process.env.IP, (req, res) => {
    console.log("Listening!!");
})