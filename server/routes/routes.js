const express = require('express');
const { signup_customer } = require('../controllers/signup');
const router = express.Router();

router.route('/signup/customer').post(signup_customer);

module.exports = router; 