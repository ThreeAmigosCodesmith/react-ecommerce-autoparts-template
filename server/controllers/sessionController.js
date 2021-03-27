// const e = require('express');
const Session = require('../models/sessionModel');

const sessionController = {};

/* isLoggedIn - find the appropriate session for this request in the database, then verify
whether or not the session is still valid */
sessionController.isLoggedIn = async (req, res, next) => {
  try {
    if (req.cookies.ssid) {
      const currSession = await Session.findOne({ cookieId: req.cookies.ssid });
      if (!currSession) res.locals.success = false;
      else res.locals.success = true;
    } else res.locals.success = false;
  } catch (error) {
    console.log(error);
  }
  next();
};

/* startSession - create and save a new Session into the database. */
sessionController.startSession = async (req, res, next) => {
  try {
    if (res.locals.userId) {
      await Session.create({ cookieId: res.locals.userId });
      return next();
    }
  } catch (error) {
    return next(error);
  }
  return next();
};

/* stopSession - removes session from db */
sessionController.stopSession = async (req, res, next) => {
  await Session.deleteOne({ cookieId: res.locals.cookie });
  return next();
};

module.exports = sessionController;
