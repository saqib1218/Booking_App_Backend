const { Schema, model } = require('mongoose');

const hotelSchema = new Schema(
  {
    roomType: { type: String, required: true, trim: true },
    guests: { type: Number, required: true, min: 1 },
    pricePerNight: { type: Number, required: true, min: 0 },
    description: { type: String, required: true, trim: true, maxlength: 2000 },
    beds: { type: Number, required: true, min: 1 },
    baths: { type: Number, required: true, min: 1 },
  },
  { timestamps: true }
);

module.exports = model('Hotel', hotelSchema);
