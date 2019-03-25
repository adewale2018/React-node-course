import mongoose from 'mongoose';
 
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  hashed_password: {
    type: String, 
    required: true
  },
  salt: String,
  created: {
    type: Date,
    default: DataCue.now
  },
  updated: Date

});

module.exports = mongoose.model('User', userSchema);
