const { ObjectId } = require('bson');
const User = require('../models/user');

async function getUsers(req, res) {
    await User.find({}).then(users => {
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

async function getUser(req, res) {
    const {userId} = req.params;
    await User.find({ _id: ObjectId(userId)}).then(users => {
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

async function createUser(req, res) {
    const {name, email} = req.body;
    await User.create({name, email}).then(user => {
        return res.status(201).json({ status: 200, data: user, message: "Succesfully created new user" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

async function updateUser(req, res) {
    const {name, email} = req.body; // TODO: Add password here when needed.
    const bodyToUpdate = {
        ...(name && {name}),
        ...(email && {email})
    };
    const {userId} = req.params;
    await User.findOneAndUpdate({_id: ObjectId(userId)}, bodyToUpdate).then(user => {
        return res.status(200).json({ status: 200, data: user, message: "Succesfully updated the user" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

async function deleteUser(req, res) {
    const {userId} = req.params;
    await User.findOneAndDelete({_id: ObjectId(userId)}).then(user => {
        return res.status(200).json({ status: 200, data: user, message: "Succesfully deleted the user" });
    }).catch (error => {
        return res.status(400).json({ status: 400, message: error.message });
    });
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};