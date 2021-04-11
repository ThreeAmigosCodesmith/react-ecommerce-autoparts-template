/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js');
const sessionController = require('../controllers/sessionController.js');

/* USER ROUTES */
router.get('/:userId', userController.getUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.user);
});

router.get('/', userController.getUsers, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.users);
});

router.post('/verify', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else {
    res.status(200).json({ name: res.locals.name, id: res.locals.userId });
  }
});

router.delete('/verify', cookieController.removeCookie, sessionController.stopSession, (req, res) => {
  res.status(200).json('Signed out successfully');
});

router.post('/', userController.createUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else {
    console.log({ name: res.locals.name, id: res.locals.userId });
    res.status(200).json({ name: res.locals.name, id: res.locals.userId });
  }
});

router.patch('/:userId', userController.updateUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.userupdated);
});

router.delete('/:userId', userController.deleteUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  return res.status(200).json({ status: 200, message: 'Succesfully deleted the user' });
});

module.exports = router;
