import { Request, Response, NextFunction, response } from "express";
import printer from "printer"
 import {configLowDb} from "../models/db"
 import httpStatus, { UNAUTHORIZED } from "http-status";


export class PrinterController  {
  /**
   *
   * @param req request body with posted create
   * @param res 201 if create is done successfully , 500 if there is internal server error
   * @param next for handling exceptions
   */
  getAll(req: any, res: Response, next: NextFunction) {
    return res
      .status(httpStatus.OK)
      .json({printer:configLowDb().get( process.env.NAME_jSON).value()})
  }



}





 





