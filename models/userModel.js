import mongoose from "mongoose";
import validator from 'validator'
import crypto from 'crypto'

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true,"Please enter your username"], 
        maxLength: [30, "username cannot exceed 30 characters"],
        minLength: [3, "username cannot be less than three characters"]
      },
    firstName: {
        type: String,
        maxLength: [30, "first name cannot exceed 30 characters"],
        minLength: [3, "first name cannot be less than three characters"]
      },
      lastName: {
        type: String,
        maxLength: [30, "last name cannot exceed 30 characters"],
        minLength: [3, "last name cannot be less than three characters"]
      },
      email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email address"]
      },
      phone: {
        type: String,
        unique: true,
        maxLength: [11, "phone number cannot exceed 11 numbers"],
        minLength: [11, "first name cannot be less than eleven characters"]
      },
      password: { 
         type: String,
         required: [true, 'Please enter your password'],
         minlength: [6, 'Your password cannot be less than 8 characters'],
      },
      role:{
        type: String,
        default: "user"
      },

      resetPasswordToken: String,
      resetPasswordExpire: Date,

}, {timestamps: true})

//Generate Password reset token
userSchema.methods.getResetPasswordToken = function () {

  //Generate password reset token
  const resetToken = crypto.randomBytes(20).toString('hex');

  //Hash and set to resetPasswordToken
  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

  // set token expire time 
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

  return resetToken;
};

export default mongoose.model('users',userSchema)