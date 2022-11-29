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

// export a function we will use to GET to the database
export const getDb = async () => {
  console.log("GET from the database");

  // create a connection to the IndexedDB database & the version we want to use
  const contactDb = await openDB("contacts", "readonly");

  // open up the desired object store
  const store = tx.objectStore("contacts");

  // use the .getAll() method to get all data in the datbase
  const request = store.getAll();

  // get confirmation of the request
  const result = await request;
  console.log("result.value", result);
  return result;
};

// export a function we will use to POST to the database
export const postDb = async (name, email, phone, profile) => {
  console.log("POST to the database");

  // create a connection to the database and specify the version we want to use
  const contactDb = await openDB("contact-db", 1);

  // create a new transaction and specify the store & data privileges
  const tx = contactDb.transaction("contacts", "readwrite");

  // open up the desired object store
  const store = tx.objectStore("contacts");

  // use the .add() method on the store & pass in the content
  const request = store.add({
    name: name,
    email: email,
    phone: phone,
    profile: profile,
  });

  // get confirmation of the request
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};
