// import Nedb from "nedb";
// var Datastore = require('nedb');
// import path from "path";
const path = require('path')

const Datastore = require('nedb');
const db = new Datastore({
  filename: 'C:\\Users\\user\\myTestDb.db'
});

db.loadDatabase(error => {
  if (error) {
    console.log('FATAL: local database could not be loaded. Caused by: ' + error);
    throw error;
  }
  console.log('INFO: local database loaded successfully.');
})

// const db = new Nedb<Document>({filename: path.join(app.getPath('home'), 'myTestDb.db'), autoload: true})
db.find({}, (error, docs) => {
  console.log('das')
  console.log(docs)
})

const doc = {
  key: "config",

}

db.insert(doc, function (error, newDoc) {
  if (error) {
    console.log('ERROR: saving document: ' + JSON.stringify(doc) + '. Caused by: ' + error);
    throw error;
  }
  console.log('INFO: successfully saved document: ' + JSON.stringify(newDoc));
});

console.log('dsads')


