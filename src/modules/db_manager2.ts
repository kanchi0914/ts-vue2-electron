import Datastore from 'nedb'
import AsyncNedb from 'nedb-async'
import Nedb from "nedb";

interface IUser {
    firstName: string
    lastName: string
    age: number
    email: string
}

interface IDocument {
    title: string
    comment: string
    tags: []
    createdAt: Date
    updatedAt: Date
    text: string
}

class Document implements IDocument {
    comment: string;
    createdAt: Date;
    tags: [];
    text: string;
    title: string;
    updatedAt: Date;

    constructor(text = '', title =  '', comment = '') {
        this.text = 'HI!!'
        this.title = title
        this.comment = comment
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.tags = []
    }
}

export class DbManager{
    private db: AsyncNedb<any>

    // constructor() {
    //
    // }

    constructor(dbFileName: string = 'testDb.db', isUserData: boolean = false) {
        //const db = isUserData ? new Datastore({filename: dbFileName}) : new Datastore({filename: dbFileName})
        const db = new AsyncNedb<IDocument>({filename: dbFileName, autoload: true})
        // db.loadDatabase(function (error) {
        //     if (error) {
        //         console.log('FATAL: local database could not be loaded. Caused by: ' + error);
        //         throw error;
        //     }
        //     console.log('INFO: local database loaded successfully.');
        // });
        // db.insert(new Document())
        // db.insert(new Document())
        this.db = db;
    }

    // constructor(a: number) {
    //     const db = isUserData ? new Datastore({filename: dbFileName}) : new Datastore({filename: dbFileName})
    //     db.loadDatabase(function (error) {
    //         if (error) {
    //             console.log('FATAL: local database could not be loaded. Caused by: ' + error);
    //             throw error;
    //         }
    //         console.log('INFO: local database loaded successfully.');
    //     });
    //     this.db = db;
    // }

    // static getA(): string {
    //     console.log('wwwwww')
    //     const User = new AsyncNedb<IUser>({filename: 'data.db', autoload: true})
    //     return 'thisistest!!'
    // }
    //
    // static getB(): string {
    //     console.log('wwwwww')
    //     return 'this is b'
    // }

    // async find(query: any): Promise<any> {
    //     this.db.asyncFind(query).then(i => {
    //         return i
    //     }).catch(e => {
    //         return e
    //     })
    // }

    findAllSuper() {
        return this.db.asyncFind({})
        // this.db.asyncFind({}).then(docs => {
        //     console.log('2222222')
        //     console.log(docs)
        //     return docs
        // })
    }

    findAll2(){
        return this.db.find({})
    }

    // findAll(): any {
    //     this.db.find({}, (err: Error, doc: any) => {
    //         return doc
    //     })
    // }
    //
    // insert(doc: any): any {
    //     this.db.insert(doc, (error) => {
    //         if (error) console.log(error)
    //     });
    // }

    // loadDatabase: (dbFileName: string, isUserData: boolean): Datastore => {
    //     const db = isUserData? new Datastore({filename: dbFileName}) : new Datastore({filename: dbFileName})
    //     db.loadDatabase(function (error) {
    //         if (error) {
    //             console.log('FATAL: local database could not be loaded. Caused by: ' + error);
    //             throw error;
    //         }
    //         console.log('INFO: local database loaded successfully.');
    //     });
    //     return db;
    // },
    // find: (db: Datastore, query: any): any => {
    //     db.find(query, (err: Error, doc: any) => {
    //         return doc
    //     })
    // },
    // findAll: (db: Datastore): any => {
    //     db.find({}, (err: Error, doc: any) => {
    //         return doc
    //     })
    // },
    // insert: (db: Datastore, obj: any): void => {
    //     db.insert(obj, (error) => {
    //         if (error) console.log(error)
    //     });
    // }
}
