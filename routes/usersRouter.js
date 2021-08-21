const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/signin', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.patch(
  '/changePassword',
  authController.protect,
  usersController.changePassword
);

router.patch('/', authController.protect, usersController.editUser);

router.get('/', authController.protect, usersController.getAllUsers);
router.get('/:id', authController.protect, usersController.getUser);

module.exports = router;
