var mongoose = require("mongoose");
var Comments = require("./commentSchema.js");

var productSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    category: String,
    description: String,
    likes: Number,
    disLikes: Number,
    productComments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments"
    }],
    img: String
});

module.exports = mongoose.model("products", productSchema);