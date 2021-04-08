const Order = require('../models/Orders');

async function getOrders(req, res, next) {
  await Order.findAll()
    .then((orders) => {
      res.locals.orders = orders;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function getAllOrdersByUser(req, res, next) {
  await Order.findAll({
    customerId: req.params.id,
  })
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
  await Order.findOne({
    where: {
      orderId,
    },
  })
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

// // TODO: Needs fixing
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

  await Order.findOneAndUpdate(bodyToUpdate, {
    where: {
      orderId,
    },
  })
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

  await Order.destroy({
    where: {
      orderId,
    },
  })
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
  getOrders,
  getAllOrdersByUser,
  getOrder,
  updateOrder,
  createOrder,
  deleteOrder,
};
