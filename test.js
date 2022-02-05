const fs = require('fs')
console.log(new Date())
fs.stat('C:\\Users\\user\\Downloads\\czxczx', (e,d) => {
  console.log(d.birthtime)
})
