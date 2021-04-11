const express = require('express');

const router = express.Router();

const chatController = require('../controllers/chatController.js');

router.post('/', chatController.startChat, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.chat);
});

router.post('/:chatSessionID', chatController.addMesasageToChat, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.message);
});

router.get('/:chatSessionID', chatController.getAllUserChats, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.chat);
});

router.get('/user/:userID', chatController.getAllUserChats, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.chats);
});

router.get('/', chatController.getAllChats, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.chats);
});

module.exports = router;
