// import {DbSource} from "@/modules/dbSource";
// import Datastore from 'nedb'
//
// export class DBWrapper implements DbSource {
//     dataStore: Datastore;
//
//     constructor(dbFileName: string, isUserData: boolean) {
//         this.dataStore = isUserData ? new Datastore({filename: dbFileName}) : new Datastore({filename: dbFileName})
//         this.dataStore.loadDatabase(function (error) {
//             if (error) {
//                 console.log('FATAL: local database could not be loaded. Caused by: ' + error);
//                 throw error;
//             }
//             console.log('INFO: local database loaded successfully.');
//         });
//     }
//
//     getA(){
//         return 'thisIsInsane'
//     }
//
//     find(query: any) {
//         console.log('aaaaa')
//         let temp = null;
//         this.dataStore.find(query, (err: Error, doc: any) => {
//             temp = doc
//         })
//         return temp
//     }
//
//     findAll() {
//         let temp = "aaa";
//         this.dataStore.find({}, (err: Error, doc: any) => {
//             temp = doc
//         })
//         return temp
//     }
//
//     insert(obj: any) {
//         console.log('bbbbb')
//         this.dataStore.insert(obj, (error) => {
//             if (error) console.log(error)
//         });
//     }
// }
