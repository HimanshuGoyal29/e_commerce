var mongoose = require("mongoose");
var Cart = require("./productSchema.js");
var Comments = require("./commentSchema.js");
var userSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    address: String,
    email: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    }],
    cart_total: Number,
    userComments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments"
    }]
});

module.exports = mongoose.model("users", userSchema);