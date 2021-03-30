const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  date: { type: Date },
  productId: { type: String },
  sellerId: { type: String },
  buyerId: { type: String },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
