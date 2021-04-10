const { models: { chat } } = require('../models/index');

async function getAllChats(req, res, next) {
  try {
    console.log('hello');
  } catch (err) {
    res.locals.erroor = err;
    return next();
  }
  const chats = await chat.findAll();

  console.log(chats);
  res.locals.chats = chats;
  return next();
}

module.exports = {
  getAllChats,
};
