const { models: { order, orderDetail } } = require('../models/index.js');

async function getOrders(req, res, next) {
  await order.findAll()
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
  await order.findAll({
    customerID: req.params.id,
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
  await order.findOne({
    where: {
      orderId,
    },
  })
    .then((orderEntry) => {
      res.locals.order = orderEntry;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function createOrder(req, res, next) {
  console.log('creating order');
  const {
    date, productId: productIDs, sellerId: sellerID, buyerId: buyerID,
  } = req.body;

  try {
    // const transaction = uuidv4();
    const orderEntry = await order.create({
      date,
      sellerID,
      buyerID,
      timestamp: new Date(),
    });

    console.log(orderEntry);

    const { orderID } = orderEntry;
    const orderDetailsInput = productIDs.map((productID) => ({
      orderID,
      productID,
      fulfilled: false,
    }));

    const bulk = await orderDetail.bulkCreate(
      orderDetailsInput,
    );

    console.log(bulk);

    res.locals.ordercreated = { ...orderEntry.dataValues, orderDetailsInput };
    return next();
  } catch (error) {
    res.locals.error = error;
    return next(error);
  }
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

  await order.findOneAndUpdate(bodyToUpdate, {
    where: {
      orderId,
    },
  })
    .then((orderEntry) => {
      res.locals.order = orderEntry;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function deleteOrder(req, res, next) {
  const { orderId } = req.params;

  await order.destroy({
    where: {
      orderId,
    },
  })
    .then((orderEntry) => {
      res.locals.deletedorder = orderEntry;
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
