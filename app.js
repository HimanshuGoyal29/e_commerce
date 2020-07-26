var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("*", (req, res) => {
    res.send("WRONG PATH!");
})

var PORT = process.env.PORT || 3000;

app.listen(PORT, process.env.IP, (req, res) => {
    console.log("Listening!!");
})