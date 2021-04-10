const express = require('express');

const router = express.Router();

const chatController = require('../controllers/chatController.js');

router.get('/', chatController.getAllChats, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.chats);
});

module.exports = router;
