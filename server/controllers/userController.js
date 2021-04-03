const bcrypt = require('bcryptjs');
const { ObjectId } = require('bson');
const User = require('../models/userModel');

async function getUsers(req, res, next) {
  await User.find({})
    .then((users) => {
      res.locals.users = users;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function getUser(req, res, next) {
  const { userId } = req.params;
  await User.findOne({ _id: ObjectId(userId) })
    .then((user) => {
      res.locals.user = user;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

// eslint-disable-next-line consistent-return
async function verifyUser(req, res, next) {
  try {
    const existinguser = await User.findOne({ email: req.body.email }).exec();
    if (existinguser) {
      bcrypt.compare(req.body.password, existinguser.password, (error, isMatch) => {
        if (error) throw error;
        else if (!isMatch) {
          res.locals.error = 'Incorrect Password!';
          return next();
        } else {
          // eslint-disable-next-line no-underscore-dangle
          res.locals.userId = existinguser._id;
          res.locals.name = existinguser.name;
          return next();
        }
      });
    }
  } catch (error) {
    res.locals.error = error;
    return next();
  }
}

async function createUser(req, res, next) {
  const {
    name, password, email, address, orders, products,
  } = req.body;

  await User.create({
    name, password, email, address, orders, products,
  })
    .then((data) => {
      const { _id, name: username } = data;
      res.locals.name = username;
      res.locals.userId = _id;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

// TODO: need to pair on this one to let user update whatever field they want without affecting
// other fields
async function updateUser(req, res, next) {
  const { name, email } = req.body; // TODO: Add password here when needed.
  const bodyToUpdate = {
    ...(name && { name }),
    ...(email && { email }),
  };
  const { userId } = req.params;

  await User.findOneAndUpdate({ _id: ObjectId(userId) }, bodyToUpdate)
    .then((user) => {
      res.locals.userupdated = user;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

// TODO: throw error when a specific user_id no longer exists
async function deleteUser(req, res, next) {
  const { userId } = req.params;

  await User.findOneAndDelete({ _id: ObjectId(userId) })
    .then((user) => {
      res.locals.deleteduser = user;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

module.exports = {
  getUser,
  getUsers,
  verifyUser,
  createUser,
  updateUser,
  deleteUser,
};
