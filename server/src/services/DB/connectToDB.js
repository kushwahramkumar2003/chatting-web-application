import mongoose from "mongoose";
import { config } from "../../config/index.js";

export const connectToDB = async () => {
  mongoose.connect(config.mongo_uri);
};
