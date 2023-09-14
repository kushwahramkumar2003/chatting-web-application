import app from "./src/app.js";
import { config } from "./src/config/index.js";
import { connectToDB } from "./src/services/DB/connectToDB.js";

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
