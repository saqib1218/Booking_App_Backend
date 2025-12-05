function notFoundHandler(req, res, next) {
  res.status(404).json({ error: 'Not Found' });
}

function errorHandler(err, req, res, next) {
  let status = err.status || 500;
  let message = err.message || 'Internal Server Error';

  if (err.name === 'ValidationError') {
    status = 400;
    message = 'Validation failed';
  }
  if (err.name === 'CastError') {
    status = 400;
    message = 'Invalid identifier';
  }
  if (err && (err.code === 11000 || err.codeName === 'DuplicateKey')) {
    status = 409;
    message = 'Duplicate key error';
  }

  const payload = { error: message };

  
  if (process.env.NODE_ENV !== 'production') {
    payload.details = err.errors || undefined;
    payload.stack = err.stack;
  }

  res.status(status).json(payload);
}

module.exports = { notFoundHandler, errorHandler };
