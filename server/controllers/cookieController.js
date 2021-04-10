const cookieController = {};

/* setSSIDCookie - store the user id in a cookie */
cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.userId, {
    httpOnly: true,
  });
  console.log('cookie controller')
  return next();
};

/* clearCookie - deletes cookie locally */
cookieController.removeCookie = (req, res, next) => {
  res.locals.cookie = req.cookies.ssid;
  res.clearCookie('ssid');
  return next();
};

module.exports = cookieController;
