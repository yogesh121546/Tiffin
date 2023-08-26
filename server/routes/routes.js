const express = require('express');
const { signup_customer, signup_tiffin_provider } = require('../controllers/signup');
const router = express.Router();

router.route('/signup/tiffinProvider').post(signup_tiffin_provider);
router.route('/signup/customer').post(signup_customer);
module.exports = router; 