/* eslint-disable no-console */
const { models: { session } } = require('../models/index');

const sessionController = {};

// /* isLoggedIn - find the appropriate session for this request in the database, then verify
// whether or not the session is still valid */
sessionController.isLoggedIn = async (req, res, next) => {
  console.log('checking session ', req.cookies.ssid);
  res.locals.ssid = req.cookies.ssid;
  try {
    if (req.cookies.ssid) {
      const currSession = await session.findOne({ where: { cookieID: req.cookies.ssid } });
      if (!currSession) res.locals.success = false;
      else res.locals.success = true;
      next();
    } else res.locals.success = false;
  } catch (error) {
    res.locals.success = false;
    // eslint-disable-next-line no-console
    console.log('isLoggedIn', error);
  }
};

// /* startSession - create and save a new Session into the database. */
sessionController.startSession = async (req, res, next) => {
  try {
    if (res.locals.user.customerID) {
      await session.findOrCreate({
        where: { cookieID: res.locals.user.customerID },
        cookieID: res.locals.user.customerID || res.locals.supplierID,
        createdAt: Date.now(),
        customerID: res.locals.user.customerID || res.locals.supplierID,
      });
      return next();
    // eslint-disable-next-line no-else-return
    } else {
      return next(Error('userId not present'));
    }
  } catch (error) {
    console.log('error sarting session');
    return next(error);
  }
};

// /* stopSession - removes session from db */
sessionController.stopSession = async (req, res, next) => {
  await session.destroy({ where: { cookieID: res.locals.cookie } });
  return next();
};

module.exports = sessionController;
