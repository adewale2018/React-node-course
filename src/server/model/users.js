import mongoose from 'mongoose';
import uuidv1 from 'uuid/v1';
import crypto from 'crypto';
 
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
    default: Date.now
  },
  updated: Date

});

userSchema
.virtual("password")
.set(function(password){
  // create temporary variable called _password
  this._password = password
  //generate a timestamp
  this.salt = uuidv1();
  //encryptPassword()
  this.hashed_password = this.encryptPassword(password);
})
.get(function(){
  return this._password
})

// methods
userSchema.methods = {
  authenticate: (plainText) => {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function(password){
    if(!password) return "";
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch(err) {
      return ""
    }
  }
}

module.exports = mongoose.model('User', userSchema);
