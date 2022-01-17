// var Datastore = require('nedb'), db = new Datastore({ filename: 'test999.db' });
//
// db.loadDatabase(function (error) {
//   if (error) {
//     console.log('FATAL: local database could not be loaded. Caused by: ' + error);
//     throw error;
//   }
//   console.log('INFO: local database loaded successfully.');
// });
//
// // creating the object with new, just to make it clear.
// // var doc = {hello: 'world'}; should work too.
// function myDoc(greeting)
// {
//   this.hello=greeting;
// }
// var doc = new myDoc('world');
//
// db.insert(doc, function (error, newDoc) {
//   if (error) {
//     console.log('ERROR: saving document: ' + JSON.stringify(doc) + '. Caused by: ' + error);
//     throw error;
//   }
//   console.log('INFO: successfully saved document: ' + JSON.stringify(newDoc));
// });
