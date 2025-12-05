const Staff = require('../models/Staff');

exports.getStaff = async (req, res, next) => {
  try {
    const staff = await Staff.find().sort({ createdAt: -1 });
    res.json(staff);
  } catch (err) {
    next(err);
  }
};
