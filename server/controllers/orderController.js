const { ObjectId } = require('bson');
const Order = require('../models/orderModel');

async function getOrders(req, res, next) {
  await Order.find({})
    .then((orders) => {
      res.locals.orders = orders;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function getOrder(req, res, next) {
  const { orderId } = req.params;
  await Order.find({ _id: ObjectId(orderId) })
    .then((order) => {
      res.locals.order = order;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function createOrder(req, res, next) {
  const {
    date, productId, sellerId, buyerId,
  } = req.body;

  await Order.create({
    date, productId, sellerId, buyerId,
  })
    .then((order) => {
      res.locals.ordercreated = order;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function updateOrder(req, res, next) {
  const {
    date, productId, sellerId, buyerId,
  } = req.body;
  const { orderId } = req.params;
  const bodyToUpdate = {
    ...(date && { date }),
    ...(productId && { productId }),
    ...(sellerId && { sellerId }),
    ...(buyerId && { buyerId }),
  };

  await Order.findOneAndUpdate({ _id: ObjectId(orderId) }, bodyToUpdate, { new: true })
    .then((order) => {
      res.locals.order = order;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function deleteOrder(req, res, next) {
  const { orderId } = req.params;

  await Order.findOneAndDelete({ _id: ObjectId(orderId) })
    .then((order) => {
      res.locals.deletedorder = order;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

module.exports = {
  getOrder,
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
