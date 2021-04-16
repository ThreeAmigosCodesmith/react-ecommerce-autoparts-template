const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { models: { customer } } = require('../models/index');

async function getUsers(req, res, next) {
  await customer.findAll()
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
  await customer.findOne({ where: { customerID: res.locals.success ? res.locals.ssid : userId } })
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
    const existingUser = await customer.findOne({ where: { email: req.body.email } });
    if (existingUser) {
      bcrypt.compare(req.body.password, existingUser.password, (error, isMatch) => {
        if (!isMatch) {
          res.locals.error = 'Incorrect Password!';
          return next();
        // eslint-disable-next-line no-else-return
        } else {
          // const {
          //   firstName,
          //   lastName,
          //   customerID,
          //   address,
          // } = existingUser;
          // res.locals.userId = customerID;
          // res.locals.name = `${firstName} ${lastName}`;
          // eslint-disable-next-line no-console
          console.log('existingUser dataValues: ', existingUser.dataValues);
          res.locals.user = existingUser.dataValues;
          // eslint-disable-next-line no-console
          console.log('res.locals.user', res.locals.user);
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
  const address1 = address;

  try {
    // Hash password
    const SALT = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, SALT);

    // Store user in DB
    await customer.create({
      customerID,
      firstName,
      lastName,
      email,
      address1,
      password: hashedPassword,
    }, { returning: true });

    // Send back username and customerID
    res.locals.name = `${firstName} ${lastName}`;
    res.locals.userId = customerID;
    return next();
  } catch (err) {
    res.locals.error = err;
    return next();
  }
}

async function updateUser(req, res, next) {
  const { userId } = req.params;

  await customer.update(req.body, {
    where: {
      customerID: userId,
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

  await customer.destroy({
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
