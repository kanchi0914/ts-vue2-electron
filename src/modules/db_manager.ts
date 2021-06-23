import Datastore from 'nedb'
import {Data} from "electron";

// module.exports = {
//     loadDatabase: (dbFileName: string, isUserData: boolean): Datastore => {
//         const db = isUserData? new Datastore({filename: dbFileName}) : new Datastore({filename: dbFileName})
//         db.loadDatabase(function (error) {
//             if (error) {
//                 console.log('FATAL: local database could not be loaded. Caused by: ' + error);
//                 throw error;
//             }
//             console.log('INFO: local database loaded successfully.');
//         });
//         return db;
//     },
//     find: (db: Datastore, query: any): any => {
//         db.find(query, (err: Error, doc: any) => {
//             return doc
//         })
//     },
//     findAll: (db: Datastore): any => {
//         db.find({}, (err: Error, doc: any) => {
//             return doc
//         })
//     },
//     insert: (db: Datastore, obj: any): void => {
//         db.insert(obj, (error) => {
//             if (error) console.log(error)
//         });
//     }
// }
