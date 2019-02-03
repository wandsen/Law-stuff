const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String
  },{
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
