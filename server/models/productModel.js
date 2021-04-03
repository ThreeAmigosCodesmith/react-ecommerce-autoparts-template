const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  make: { type: String },
  model: { type: String },
  borough: { type: String },
  year: { type: Date },
  imageLink: { type: String },
  description: { type: String },
  price: { type: Number },
  condition: { type: String },
  sellerID: { type: String },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
