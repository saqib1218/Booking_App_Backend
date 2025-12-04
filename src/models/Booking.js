const { Schema, model } = require('mongoose');

const bookingSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: /.+@.+\..+/, // basic email format
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
      maxlength: 20,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    room: {
      type: String,
      required: true,
      trim: true,
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          // checkOut must be after checkIn
          if (!this.checkInDate) return true;
          return value > this.checkInDate;
        },
        message: 'checkOutDate must be after checkInDate',
      },
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
  },
  { timestamps: true }
);

module.exports = model('Booking', bookingSchema);
