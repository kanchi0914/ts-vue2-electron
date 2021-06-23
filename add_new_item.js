var Datastore = require('nedb');
var db = new Datastore({
  filename: 'test_docs.db'
});

db.loadDatabase(error => {
  if (error) {
    console.log('FATAL: local database could not be loaded. Caused by: ' + error);
    throw error;
  }
  console.log('INFO: local database loaded successfully.');
})

var master = {
  tags:['AAA', 'BBB'],
  docs: [
    getDoc(1),
    getDoc(2),
    getDoc(3)
  ]
}

function getDoc(number){
  return {
    title: `${number}`,
    comment: "",
    tags: [],
    createdAt: "",
    updatedAt: "",
    text: `test test ${number}`
  }
}
const list = [...Array(5).keys()]
// db.remove({}, {multi: true})


// db.insert({tags:["AAA", "BBB"]}, (err, newDoc) => {
//   if (err){
//     console.log(err)
//   }else{
//     console.log("inserted")
//   }
// })
//
// list.forEach(i => {
//   db.insert(getDoc(i), (err, newDoc) => {
//     if (err){
//       console.log(err)
//     }else{
//       console.log("inserted")
//     }
//   })
// })




db.insert(master, function (error, newDoc) {
  if (error) {
    console.log('ERROR: saving document: ' + JSON.stringify(master) + '. Caused by: ' + error);
    throw error;
  }
  console.log('INFO: successfully saved document: ' + JSON.stringify(newDoc));
});


// eslint-disable-next-line @typescript-eslint/no-empty-function
db.find({}, (error, docs) => {
  console.log(docs)
})

console.log('dsadas')
