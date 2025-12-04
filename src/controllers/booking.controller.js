const Booking = require('../models/Booking');

exports.createBooking = async (req, res, next) => {
  try {
    const booking = await Booking.create(req.body);
    return res.status(201).json(booking);
  } catch (err) {
    return next(err);
  }
};
