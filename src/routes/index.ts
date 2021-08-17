import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import {PrinterRoutes} from "./printer.routs";


export = (app) => {

 app.use(cookieParser());
// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

//************************** Access Origin ****************************************/

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:9292'];

//options for cors midddleware
const options: cors.CorsOptions = {
    origin: allowedOrigins,
    allowedHeaders: [
        'Origin','X-Requested-With',
        'Content-Type','Accept','X-Access-Token',
      ],
      methods: 'GET,PUT,POST,DELETE',
  };

// enable api remote access
app.use(cors(options));
// app.options('*', cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    next();
  });
  
  
  app.use("/printer", new PrinterRoutes().router);




}