const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 150
  },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   maxlength: 150
  // },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255
  },
  // phone: {
  //   type: String,
  //   maxlength: 15
  // },
  // role: {
  //   type: String,
  //   enum: ["user", "admin"],
  //   default: "user",
  //   maxlength: 10
  // },
  // status: {
  //   type: String,
  //   enum: ["active", "inactive", "suspended"],
  //   default: "active",
  //   maxlength: 10
  // },
  // profilePicture: {
  //   type: String,
  //   maxlength: 800
  // },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
