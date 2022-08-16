import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

const sendForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    throw new BadRequestError('please provide all values');
  }

  const user = await User.create({ name, email, message });
  res.status(StatusCodes.CREATED).json({ user });
};

export { sendForm };
