// import idb and regenerator-runtime/runtime
import { openDB } from "idb";
import "regenerator-runtime/runtime";

// exported async function for DB functionality named initDb 
// use function to open a connection w/ IndexedDB API, configure it, and initalize an IndexedDB database
export const initdb = async () => {
    // openDB method - pass in name of DB and version #
  // we are creating a new database named contact_db which will be using version 1 of the DB
  openDB("contact_db", 1, {
    // add our database schema if it has not already been initialized
    // check if it already contains object store called 'contacts'
    upgrade(db) {
      if (db.objectStoreNames.contains("contacts")) {
        console.log("contacts store already exists");
        return;
      }
      // pass in name of table along w/ object that contains another object called keyPath
      // keyPath obj instructs browser how & where to extract keys (here only applies to 'id')
      // pass into the keyPath obj a key of id and a value of autoincrement: true 
      // create a new obj store for the data & give it a key name of 'id' which will increment automatically
      db.createObjectStore("contacts", { keyPath: "id", autoIncrement: true });
      console.log("contacts store created");
    },
  });
};
