import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path:
    process.env.NODE_ENV == "dev"
      ? path.join(__dirname, "../../.env.test")
      : path.join(__dirname, "../../.env"),
});


export default {
    port: process.env.NODE_SERVER_PORT,
    mongoose: {
      url: process.env.MONGODB_URL,
    },
  };