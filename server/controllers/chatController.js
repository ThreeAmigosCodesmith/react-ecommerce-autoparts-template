const { models: { chat } } = require('../models/index');

async function getAllChats(req, res, next) {
  try {
    const chats = await chat.findAll();

    res.locals.chats = chats;
    return next();
  } catch (err) {
    res.locals.erroor = err;
    return next();
  }
}

async function getAllUserChats(req, res, next) {
  try {
    const { customerID } = req.params;
    const data = await chat.findAll({
      where: { customerID },
    });

    res.locals.chats = data;
    return next();
  } catch (err) {
    res.locals.error = err;
    return next();
  }
}

async function getChatByID(req, res, next) {
  try {
    const { chatSessionID } = req.params;
    const data = await chat.find({
      where: { sessionID: chatSessionID },
    });

    res.locals.chat = data;
    return next();
  } catch (err) {
    res.locals.error = err;
    return next();
  }
}

async function addMesasageToChat(req, res, next) {
  try {
    const { chatSessionID } = req.params;
    const { message, supplierID } = req.body;
    const data = await chat.create({
      sessionID: chatSessionID,
      createdAt: Date.now(),
      message,
      supplierID,
    });

    res.locals.chat = data;
    return next();
  } catch (err) {
    res.locals.error = err;
    return next();
  }
}

async function startChat(req, res, next) {
  try {
    const { message, supplierID } = req.body;
    const data = await chat.create({
      createdAt: Date.now(),
      message,
      supplierID,
    });

    res.locals.chat = [data];
    return next();
  } catch (err) {
    res.locals.error = err;
    return next();
  }
}

module.exports = {
  getAllChats,
  getAllUserChats,
  getChatByID,
  addMesasageToChat,
  startChat,
};
