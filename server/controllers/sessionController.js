const Session = require('../models/Session');

const sessionController = {};

// /* isLoggedIn - find the appropriate session for this request in the database, then verify
// whether or not the session is still valid */
sessionController.isLoggedIn = async (req, res, next) => {
  try {
    if (req.cookies.ssid) {
      const currSession = await Session.findOne({ where: { cookieId: req.cookies.ssid } });
      if (!currSession) res.locals.success = false;
      else res.locals.success = true;
    } else res.locals.success = false;
  } catch (error) {
    res.locals.success = false;
    // eslint-disable-next-line no-console
    console.log(error);
  }
  next();
};

// /* startSession - create and save a new Session into the database. */
sessionController.startSession = async (req, res, next) => {
  try {
    if (res.locals.userId) {
      await Session.create({ cookieId: res.locals.userId, createdAt: Date.now() });
      return next();
    }
  } catch (error) {
    return next(error);
  }
  return next();
};

// /* stopSession - removes session from db */
sessionController.stopSession = async (req, res, next) => {
  await Session.destroy({ where: { cookieId: res.locals.cookie } });
  return next();
};

module.exports = sessionController;
