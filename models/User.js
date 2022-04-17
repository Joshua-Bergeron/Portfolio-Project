import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 1,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
  },
  message: {
    type: String,
    required: [true, 'Please provide message'],
    minlength: 1,
    maxLength: 1000,
  },
});

export default mongoose.model('User', UserSchema);
