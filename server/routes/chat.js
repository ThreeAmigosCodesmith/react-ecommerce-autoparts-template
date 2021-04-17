const express = require('express');
const chatController = require('../controllers/chatController.js');

const router = express.Router();

router.get('/:chatSessionID', chatController.getAllUserChats, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.chat);
});

router.post('/customer', chatController.getlAllSupplierChats, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.chats);
});

router.post('/owner', chatController.getlAllSupplierChats, chatController.formatChatList,
  (req, res) => {
    if (res.locals.error) res.status(400).json(res.locals.error);
    else res.status(200).json(res.locals.chats);
  });

router.get('/user', chatController.getAllUserChats, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.chats);
});

router.post('/:chatSessionID', chatController.addMesasageToChat, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.message);
});

router.get('/', chatController.getAllChats, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.chats);
});

router.post('/', chatController.startChat, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.chat);
});

module.exports = router;
