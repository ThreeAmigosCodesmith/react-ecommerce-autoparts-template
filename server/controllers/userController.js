const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
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
  await Customer.findOne({ where: { customerID: userId } })
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
    name, password, email, address,
  } = req.body;

  const [firstName, lastName] = name.split(' ');
  const customerID = uuidv4();

  await Customer.create({
    customerID, firstName, lastName, password, email, address,
  })
    .then(() => {
      res.locals.name = `${firstName} ${lastName}`;
      res.locals.userId = customerID;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function updateUser(req, res, next) {
  const { userId } = req.params;

  await Customer.update(req.body, {
    where: {
      customerID: parseInt(userId, 10),
    },
    returning: true,
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

async function deleteUser(req, res, next) {
  const { userId } = req.params;

  await Customer.destroy({
    where: {
      customerID: userId,
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
