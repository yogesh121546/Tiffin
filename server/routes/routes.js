const express = require('express');
const { signup_customer, signup_tiffin_provider } = require('../controllers/signup');
const {getRequests}  = require('../controllers/TiffinProvider/getRequests');
const {getData}  = require('../controllers/TiffinProvider/getData');
const router = express.Router();

router.route('/signup/tiffinProvider').post(signup_tiffin_provider);
router.route('/signup/customer').post(signup_customer);
router.get('/Tiffin/getData').get(getData);
router.get('/Tiffin/getRequests').get(getRequests);

module.exports = router; 