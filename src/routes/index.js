const express = require('express');

const bookingRoutes = require('./booking.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express.js API v1' });
});

router.use('/bookings', bookingRoutes);

module.exports = router;
