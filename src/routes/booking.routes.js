const express = require('express');
const { createBooking } = require('../controllers/booking.controller');
const { validateBooking } = require('../middlewares/validators');

const router = express.Router();


router.post('/', validateBooking, createBooking);

module.exports = router;
