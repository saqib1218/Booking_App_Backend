const express = require('express');

const bookingRoutes = require('./booking.routes');
const staffRoutes = require('./staff.routes');
const hotelRoutes = require('./hotel.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express.js API v1' });
});

router.use('/bookings', bookingRoutes);
router.use('/staff', staffRoutes);
router.use('/hotels', hotelRoutes);

module.exports = router;
