import express from "express";
import { Server, createServer } from "http"; 
import * as conf from "./config/config";
import routes from "./routes";
import logger from "./utils/logger";

const app = express();


const server = createServer(app);
const config = conf.default;
app.set("port", process.env.PORT || config.port);

routes(app); 

server.listen(app.get("port"), () => 
{ 
  
  logger().info(`Server is running on port :: ${app.get("port")} - ${process.env.NODE_ENV} mode -`)

 
})
