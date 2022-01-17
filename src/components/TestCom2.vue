<template>
  <div align="center">
    {{ text }}
    <div>
      ------------------------
    </div>
    <TopEditor/>
  </div>
</template>

<script>
// import { dbManager } from "@/modules/db_manager2"
// import {DBWrapper} from "@/modules/DBWrapper";
import {DbManager} from "@/modules/db_manager2";
import {Doc} from "@/modules/doc"
import Editor from "@/components/editor/Editor";
import TopEditor from "@/components/TopEditor";

export default {
  name: "TestCom2",
  components: {TopEditor},
  data: () => {
    return {
      text: 'aaaa',
      db: null
    }
  },
  created() {
    this.db = global.config.db
    console.log('-----------')
    this.db.insert(new Doc('test!!!'))
    this.db.find({}, (e, docs) => {
      console.log(':::::::')
      console.log(docs)
      console.log(':::::::')
    })
    console.log('-----------')

    // const db = new DbManager()
    // const text = db.findAll2()
    // text.exec((err, doc) => {
    //   console.log(doc)
    // })

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
