const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { models: { customer, supplier } } = require('../models/index');

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
    const existingCustomer = await customer.findOne({ where: { email: req.body.email } });
    console.log(existingCustomer);
    if (existingCustomer?.dataValues) {
      console.log('customer exists');
      bcrypt.compare(req.body.password, existingCustomer.password, (error, isMatch) => {
        if (!isMatch) {
          res.locals.error = 'Incorrect Password!';
          return next();
        // eslint-disable-next-line no-else-return
        } else {
          res.locals.user = { ...existingCustomer.dataValues, userRole: 'CUSTOMER' };
          return next();
        }
      });
    } else {
      const existingOwner = await supplier.findOne({ where: { email: req.body.email } });
      if (existingOwner) {
        bcrypt.compare(req.body.password, existingOwner.password, (error, isMatch) => {
          if (!isMatch) {
            res.locals.error = 'Incorrect Password!';
            return next();
          // eslint-disable-next-line no-else-return
          } else {
            res.locals.user = { ...existingOwner.dataValues, userRole: 'OWNER', customerID: existingOwner.dataValues.supplierID };
            return next();
          }
        });
      }
    }
  } catch (error) {
    res.locals.error = error;
    return next();
  }
}

async function createUser(req, res, next) {
  const {
    name, password, email, userRole, zipcode,
  } = req.body;
  const [firstName, lastName] = name.split(' ');
  const randomID = uuidv4();

  try {
    // Hash password
    const SALT = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, SALT);

    // Store user in DB
    if (userRole === 'CUSTOMER') {
      await customer.create({
        customerID: randomID,
        firstName,
        lastName,
        email,
        postalCode: zipcode,
        password: hashedPassword,
      }, { returning: true });
    } else {
      await supplier.create({
        supplierID: randomID,
        firstName,
        lastName,
        email,
        postalCode: zipcode,
        password: hashedPassword,
      });
    }

    // Send back username and customerID
    res.locals.name = `${firstName} ${lastName}`;
    res.locals.userId = randomID;
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
