const express = require('express');

const userController = require('../controllers/userController.js');

const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.patch('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;