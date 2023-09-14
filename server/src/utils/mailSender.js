import nodemailer from "nodemailer";
import { config } from "../config/index.js";

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: config.mail_host,
      port: 587,
      auth: {
        user: config.mail_user,
        pass: config.mail_pass,
      },
    });

    let info = await transporter.sendMail({
      from: `"Chit Chat" <${config.mail_user}>`,
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = mailSender;
