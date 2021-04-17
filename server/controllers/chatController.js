/* eslint-disable no-console */
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

async function getlAllSupplierChats(req, res, next) {
  console.log('getting supplier chats');
  try {
    const { supplierID } = req.body;
    console.log(supplierID);
    const data = await chat.findAll({
      where: { supplierID },
      include: ['customer'],
      order: [['createdAt', 'DESC']],
    });
    res.locals.chats = data;
    return next();
  } catch (err) {
    res.locals.error = err;
    return next();
  }
}

async function formatChatList(req, res, next) {
  const messagesObj = {};
  const { chats } = res.locals;

  chats.forEach((chatEntry) => {
    const newChat = {
      chatSessionID: chatEntry.chatSessionID,
      chatID: chatEntry.chatID,
      message: chatEntry.message,
      createdAt: chatEntry.createdAt,
      active: chatEntry.active,
      customerID: chatEntry.customerID,
      supplierID: chatEntry.supplierID,
      sender: chatEntry.sender,
      chatLink: `chat.supplier-${chatEntry.chatSessionID}`,
      customerName: `${chatEntry.customer.firstName} ${chatEntry.customer.lastName}`,
      customerPhone: chatEntry.customer?.phone || 'N/A',
      customerEmail: chatEntry.customer.email,
    };
    if (messagesObj[newChat.chatSessionID]) {
      messagesObj[newChat.chatSessionID] = messagesObj[newChat.chatSessionID].concat(newChat);
    } else {
      messagesObj[newChat.chatSessionID] = [newChat];
    }
  });

  const messagesArr = [];

  Object.keys(messagesObj).forEach((chatSession) => messagesArr.push(messagesObj[chatSession]));

  res.locals.chats = messagesArr;
  return next();
}

async function getChatByID(req, res, next) {
  try {
    const { chatSessionID } = req.params;
    const data = await chat.findAll({
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
  getlAllSupplierChats,
  formatChatList,
};
