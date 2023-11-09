const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  Productimg: {
    type: String,
    requireds: true,
  },
});

const Product = mongoose.model("EProduct", productSchema);

module.exports = Product;
