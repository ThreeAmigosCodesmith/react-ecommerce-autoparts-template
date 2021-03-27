const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  make: { type: String },
  model: { type: String },
  year: { type: Date },
  imageLink: { type: String },
  description: { type: String },
  price: { type: Number },
  sellerId: { type: String },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
