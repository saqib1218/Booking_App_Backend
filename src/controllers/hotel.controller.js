const Hotel = require('../models/Hotel');

exports.getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find().sort({ pricePerNight: 1 });
    res.json(hotels);
  } catch (err) {
    next(err);
  }
};
