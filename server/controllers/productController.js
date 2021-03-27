const { ObjectId } = require('bson');
const Product = require('../models/productModel');

async function getProduct(req, res) {
    const {productId} = req.params;
    await Product.find({ _id: ObjectId(productId)}).then(product => {
        return res.status(200).json({ status: 200, data: product, message: "Succesfully Retrieved Product" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

async function getProductsByUserId(req, res) {
    const {userId} = req.params;
    await Product.find({ sellerId: userId}).then(users => {
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Retrieved Products" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

async function createProduct(req, res) {
    const {name, make, model, year, imageLink, description, price, sellerId} = req.body; 
    await Product.create({name, make, model, year, imageLink, description, price, sellerId}).then(product => {
        return res.status(201).json({ status: 200, data: product, message: "Succesfully created new product" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

async function updateProduct(req, res) {
    const {productId} = req.params;
    const { name, make, model, year, imageLink, description, price, sellerId } = req.body; 
    const bodyToUpdate = {
        ...(name && {name}),
        ...(make && {make}),
        ...(model && {model}),
        ...(year && {year}),
        ...(imageLink && {imageLink}),
        ...(description && {description}),
        ...(price && {price}),
        ...(sellerId && {sellerId})
    };

    await Product.findOneAndUpdate({_id: ObjectId(productId)}, bodyToUpdate).then(product => {
        return res.status(200).json({ status: 200, data: product, message: "Succesfully updated the product" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

async function deleteProduct(req, res) {
    const {productId} = req.params;
    await Product.findOneAndDelete({_id: ObjectId(productId)}).then(product => {
        return res.status(200).json({ status: 200, data: product, message: "Succesfully deleted the product" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

module.exports = {
    getProduct,
    getProductsByUserId,
    createProduct,
    updateProduct,
    deleteProduct,
};