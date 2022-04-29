const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  const defaultError = {
    message: err.message || 'server error',
    statusCode: err.statusCode || StatusCodes.NOT_FOUND,
  };

  if (err.code && err.code === 11000) {
    defaultError.message = `${Object.keys(err.keyValue)} is already exist`;
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.name === 'ValidationError') {
    defaultError.message = `${Object.keys(err.errors)} must be provided`;
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
  }

  return res
    .status(defaultError.statusCode)
    .json({ error: defaultError.message });
};

module.exports = errorHandler;
