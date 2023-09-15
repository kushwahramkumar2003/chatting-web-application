const {app} = require("./src/app");
const { config } = require("./src/config/index");
const { connectToDB } = require("./src/services/DB/connectToDB");

(async () => {
  try {
    await connectToDB();
    console.log("Connected to DB successfully 🎉");

    app.on("error", (error) => {
      console.log(error);
      throw err;
    });
    const port = config.port;

    app.listen(port, () => {
      console.log(`Server running on port ${port} 🔥`);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
})();
