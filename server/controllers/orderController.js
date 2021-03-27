const { ObjectId } = require('bson');
const Order = require('../models/orderModel');

async function getOrders(req, res) {
    await Order.find({}).then(orders => {
        return res.status(200).json({ status: 200, data: orders, message: "Succesfully Orders Retrieved" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

async function getOrder(req, res) {
    const {orderId} = req.params;
    await Order.find({ _id: ObjectId(orderId)}).then(orders => {
        return res.status(200).json({ status: 200, data: orders, message: "Succesfully Order Retrieved" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

async function createOrder(req, res) {
    const { date, productId, sellerId, buyerId } = req.body;
    await Order.create({date, productId, sellerId, buyerId}).then(order => {
        return res.status(201).json({ status: 200, data: order, message: "Succesfully created new order" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

async function updateOrder(req, res) {
    const { date, productId, sellerId, buyerId } = req.body; 
    const {orderId} = req.params;
    const bodyToUpdate = {
        ...(date && {date}),
        ...(productId && {productId}),
        ...(sellerId && {sellerId}),
        ...(buyerId && {buyerId})
    };
    await Order.findOneAndUpdate({_id: ObjectId(orderId)}, bodyToUpdate).then(order => {
        return res.status(200).json({ status: 200, data: order, message: "Succesfully updated the order" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

async function deleteOrder(req, res) {
    const {orderId} = req.params;
    await Order.findOneAndDelete({_id: ObjectId(orderId)}).then(order => {
        return res.status(200).json({ status: 200, data: order, message: "Succesfully deleted the order" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

module.exports = {
    getOrder,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder,
};