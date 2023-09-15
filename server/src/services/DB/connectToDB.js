const { config } = require("../../config/index.js");
const mongoose = require("mongoose");

exports.connectToDB = async () => {
  mongoose.connect(config.mongo_uri);
};
