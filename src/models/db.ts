import { join } from 'path'
import fs from 'fs'
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import printer from "printer"




interface Data {
  printers: [object] // Expect posts to be an array of strings
}


/**
 *  this create connection lowdb and create data defaults
 * @returns connection
 */
function configLowDb() {

  //Instance
  let db: lowdb.LowdbSync<Data>;
  const  file = join(__dirname, process.env.DB_jSON);
  
  const isDir = fs.existsSync(file);
  if (!isDir) {
    return null;
  }

  
// Use JSON file for storage
  const adapter = new FileSync<Data>(file);
   db = lowdb(adapter);
   // add all Printers 
   db.defaults({printers: printer.getPrinters()}).write();
   db.read()
  
  return db;
}

export { configLowDb }


