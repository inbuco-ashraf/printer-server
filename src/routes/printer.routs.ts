import { Router } from "express";
import { PrinterController } from "../controllers/printer.controller";


export class PrinterRoutes {
    router: Router;
    public printerController: PrinterController = new PrinterController();

    constructor() {
        this.router = Router();
        this.routes();
      }


      routes() {
        this.router.post("/", this.printerController.getAll); 
      }
}