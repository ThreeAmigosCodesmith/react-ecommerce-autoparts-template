const { ObjectId } = require('bson');
const User = require('../models/userModel');

async function getUsers(req, res, next) {
  await User.find({})
    .then((users) => {
      res.locals.users = users;
      return next();
    })
    .catch((error) => res.status(400).json({ status: 400, message: error.message }));
}

async function getUser(req, res, next) {
  const { userId } = req.params;
  await User.findOne({ _id: ObjectId(userId) })
    .then((user) => {
      res.locals.user = user;
      return next();
    })
    .catch((error) => res.status(400).json({ status: 400, message: error.message }));
}

async function createUser(req, res, next) {
  const {
    name, password, email, address, orders, products,
  } = req.body;

  await User.create({
    name, password, email, address, orders, products,
  })
    .then((data) => {
      res.locals.usercreated = data;
      return next();
    })
    .catch((error) => res.status(400).json({ status: 400, message: error.message }));
}

async function updateUser(req, res) {
  const { name, email } = req.body; // TODO: Add password here when needed.
  const bodyToUpdate = {
    ...(name && { name }),
    ...(email && { email }),
  };
  const { userId } = req.params;
  await User.findOneAndUpdate({ _id: ObjectId(userId) }, bodyToUpdate).then((user) => res.status(200).json({ status: 200, data: user, message: 'Succesfully updated the user' })).catch((error) => res.status(400).json({ status: 400, message: error.message }));
}

async function deleteUser(req, res) {
  const { userId } = req.params;
  await User.findOneAndDelete({ _id: ObjectId(userId) }).then((user) => res.status(200).json({ status: 200, data: user, message: 'Succesfully deleted the user' })).catch((error) => res.status(400).json({ status: 400, message: error.message }));
}

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
