const mongoose = require("mongoose");
const productModel = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Object, required: true },
});

const Product = mongoose.model("product", productModel);
module.exports = Product;
