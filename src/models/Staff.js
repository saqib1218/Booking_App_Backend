const { Schema, model } = require('mongoose');

const staffSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
  },
  { timestamps: true }
);

module.exports = model('Staff', staffSchema);
