function validateBooking(req, res, next) {
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'type',
    'room',
    'checkInDate',
    'checkOutDate',
    'message',
  ];

  const errors = {};

  for (const field of requiredFields) {
    if (
      req.body[field] === undefined ||
      req.body[field] === null ||
      (typeof req.body[field] === 'string' && req.body[field].trim() === '')
    ) {
      errors[field] = `${field} is required`;
    }
  }


  if (req.body.email) {
    const emailRe = /.+@.+\..+/;
    if (!emailRe.test(String(req.body.email))) {
      errors.email = 'email must be a valid email address';
    }
  }

  const inDate = req.body.checkInDate ? new Date(req.body.checkInDate) : null;
  const outDate = req.body.checkOutDate ? new Date(req.body.checkOutDate) : null;

  if (inDate && isNaN(inDate.getTime())) {
    errors.checkInDate = 'checkInDate must be a valid ISO date string';
  }
  if (outDate && isNaN(outDate.getTime())) {
    errors.checkOutDate = 'checkOutDate must be a valid ISO date string';
  }
  if (!errors.checkInDate && !errors.checkOutDate && inDate && outDate) {
    if (outDate <= inDate) {
      errors.checkOutDate = 'checkOutDate must be after checkInDate';
    }
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: 'Validation failed', errors });
  }

  return next();
}

module.exports = { validateBooking };
