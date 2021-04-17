/* eslint-disable no-console */
const cookieController = {};

/* setSSIDCookie - store the user id in a cookie */
cookieController.setSSIDCookie = (req, res, next) => {
  console.log('setting cookie!!!');
  console.log('Customer ID ', res.locals.user.customerID);
  res.cookie('ssid', res.locals.user.customerID, {
    httpOnly: true,
  });
  return next();
};

/* clearCookie - deletes cookie locally */
cookieController.removeCookie = (req, res, next) => {
  res.locals.cookie = req.cookies.ssid;
  res.clearCookie('ssid');
  return next();
};

module.exports = cookieController;
