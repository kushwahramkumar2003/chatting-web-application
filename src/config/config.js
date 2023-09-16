import dotenv from "dotenv";
dotenv.config();

export default {
  host_url: process.env.HOST_URL || "http://localhost:5000",
};
