const express = require('express');

const router = express.Router();

const orderController = require('../controllers/orderController.js');

/* ORDER ROUTES */

router.get('/:orderId', orderController.getOrder, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.order);
});

router.get('/', orderController.getOrders, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.orders);
});

router.get('/ordersByUser/:id', orderController.getAllOrdersByUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.orders);
});

router.post('/', orderController.createOrder, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.ordercreated);
});

router.patch('/:orderId', orderController.updateOrder, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.orderupdated);
});

router.delete('/:orderId', orderController.deleteOrder, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json({ status: 200, message: 'Succesfully deleted the order' });
});

module.exports = router;
