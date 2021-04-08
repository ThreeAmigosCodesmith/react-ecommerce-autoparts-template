const bcrypt = require('bcryptjs');
const Customer = require('../models/Customer');

async function getUsers(req, res, next) {
  await Customer.findAll()
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
  await Customer.findOne({ where: { customerId: userId } })
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
    const existinguser = await Customer.findOne({ where: { email: req.body.email } });
    if (existinguser) {
      bcrypt.compare(req.body.password, existinguser.password, (error, isMatch) => {
        if (error) throw error;
        else if (!isMatch) {
          res.locals.error = 'Incorrect Password!';
          return next();
        } else {
          res.locals.userId = existinguser.id;
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

  await Customer.create({
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

// // TODO: need to pair on this one to let user update whatever field they want without affecting
// // other fields
async function updateUser(req, res, next) {
  const { name, email } = req.body; // TODO: Add password here when needed.
  const bodyToUpdate = {
    ...(name && { name }),
    ...(email && { email }),
  };
  const { userId } = req.params;

  await Customer.findOneAndUpdate(bodyToUpdate, {
    where: {
      customerId: userId,
    },
  })
    .then((user) => {
      res.locals.userupdated = user;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

// // TODO: throw error when a specific user_id no longer exists
async function deleteUser(req, res, next) {
  const { userId } = req.params;

  await Customer.destroy({
    where: {
      customerId: userId,
    },
  })
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
  getUsers,
  getUser,
  verifyUser,
  createUser,
  updateUser,
  deleteUser,
};
