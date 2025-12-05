const express = require('express');
const { getHotels } = require('../controllers/hotel.controller');

const router = express.Router();

router.get('/', getHotels);

module.exports = router;
