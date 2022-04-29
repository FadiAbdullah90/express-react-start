const User = require('../models/User');
const { BadRequest, UnAuth } = require('../errors/CustomError');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequest('please provide all fields');
  }
  const user = await User.create({ name, email, password });
  user.password = undefined;
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest('please provide all fields');
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UnAuth('invalid email');
  }
  isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuth('invalid password');
  }
  user.password = undefined;
  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user, token });
};
module.exports = { register, login };
