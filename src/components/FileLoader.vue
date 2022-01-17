<template>
  <div>
    helloqq
  </div>
</template>

<script>
import {Doc} from "@/modules/doc";
import * as fs from "fs"
import path from 'path';


export default {

  name: "FileLoader",
  data: () => {
    return {
      db: null,
      docs: null
    }
  },
  created() {

    this.db = global.config.db
    // fs.readdir('/', (err, docs) => {
    //   console.log('dsadas')
    //   console.log(docs)
    //   console.log('dsadas')
    // })


    // const db = new DbManager()
    // const text = db.findAll2()
    // text.exec((err, doc) => {
    //   console.log(doc)
    // })

  },
  methods: {
    loadDirs(){

    }
  }
}
</script>

<style scoped>

</style>
