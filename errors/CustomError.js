const { StatusCodes } = require('http-status-codes');
class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}

class BadRequest extends CustomError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.BAD_REQUEST;
  }
}
class UnAuth extends CustomError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = { CustomError, BadRequest, UnAuth };
