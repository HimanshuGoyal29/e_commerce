var mongoose = require("mongoose");
var Cart = require("./productSchema.js");
var User = require("./userSchema");
var commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    },
    comment: String,
});

module.exports = mongoose.model("comments", commentSchema);