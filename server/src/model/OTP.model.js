const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const { generateOTPtamplate } = require("../mail/tamplate/OTPtamplate");
const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
  },
});

async function sendOTPemail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "OTP for login",
      generateOTPtamplate(otp)
    );
    console.log("mailResponse: ", mailResponse);
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}

OTPSchema.pre("save", async function (next) {
  // Only send an email when a new document is created
  try {
    if (this.isNew) {
      await sendOTPemail(this.email, this.otp);
    }
    next();
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    next(error);
  }
});

module.exports = mongoose.model("OTP", OTPSchema);
