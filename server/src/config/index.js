const dotenv = require("dotenv");
dotenv.config();

exports.config = {
  port: process.env.PORT || 3000,
  mongo_uri: process.env.MONGO_URI || "mongodb://localhost:27017/chatting-app",
  mail_host: process.env.MAIL_HOST || "smtp.ethereal.email",
  mail_user: process.env.MAIL_USER || "example@example.com",
  mail_pass: process.env.MAIL_PASS || "password",
};
