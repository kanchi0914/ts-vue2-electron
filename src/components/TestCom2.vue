<template>
  <div align="center">
    {{ text }}
  </div>
</template>

<script>
// import { dbManager } from "@/modules/db_manager2"
// import {DBWrapper} from "@/modules/DBWrapper";
import {DbManager} from "@/modules/db_manager2";

export default {
  name: "TestCom2",
  data: () => {
    return {
      text: 'aaaa',
      db: null
    }
  },
  created() {
    console.log('aaa')
    this.text = 'unkopn'

    const db = new DbManager()
    const text = db.findAll2()
    text.exec((err, doc) => {
      console.log(doc)
    })
    // const text = db.findAllSuper()
    // console.log(text)
    // this.db = db
    // text.then(result => {
    //   this.text = result
    // })
    // console.log('1111111111')
    // this.getBBB()

    // const c = dbManager.getB()
    // console.log(c)

    //const db = new DBWrapper('mytest2000.db', false)
  },

  methods: {
    // getData() {
    //   console.log('')
    // },
    // async getBBB(){
    //   const res = await this.db.findAllSuper()
    //   console.log('333333333')
    //   console.log('-----')
    //   console.log(res)
    //   console.log('-----')
    //   this.text = res;
    //   console.log('')
    // }
  }


}
</script>
