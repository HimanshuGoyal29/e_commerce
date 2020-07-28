var express = require("express");
var app = express();
var mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(express.static("public"));

var DATABASEURL = process.env.DATABASEURL || "mongodb://localhost/e_commerce";
mongoose.connect(DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DataBase Connected!");
}).catch(() => {
    console.log("DataBase not Connected!");
})

var User = require("./models/userSchema");
var Product = require("./models/productSchema");
var Comment = require("./models/commentSchema");




















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