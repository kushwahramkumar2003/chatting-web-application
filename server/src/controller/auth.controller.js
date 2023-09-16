const OTP = require("../model/OTP.model");
const User = require("../model/User.model.js");
const CustomError = require("../utils/CustomError");
const asyncHandler = require("../utils/asyncHandler");

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
};
exports.signup = asyncHandler(async (req, res, next) => {});
exports.login = asyncHandler(async (req, res, next) => {});
exports.sendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log("req.body: ", req.body);
  console.log("email: ", email);
  if (!email) {
    return new CustomError("Please provide email", 400);
  }

  const emailCheck = await User.findOne({ email });
  if (emailCheck) {
    throw new CustomError("Email already exists", 400);
  }

  const otp = Math.floor(100000 + Math.random() * 900000);

  const otpDoc = await OTP.create({ email, otp });
  if (!otpDoc) {
    return new CustomError("Something went wrong", 500);
  }
  res.status(200).json({
    success: true,
    message: "OTP sent successfully",
    data: {
      email,
      otp,
    },
  });
});
