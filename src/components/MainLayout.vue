<template>
  <div id="test100">
    <v-app-bar ref="getParentWidth">
      <v-spacer></v-spacer>
      <v-btn @click="createNewNote">新規ノート</v-btn>
    </v-app-bar>
    <Split :style="{height: contentHeight + 'px'}">
      <SplitArea :size="25">
        <v-container fluid id="size" :style="{height: contentHeight + 'px'}" class="pa-0 ma-0">
          <v-layout fill-height class="pa-0 ma-0">
            <v-sheet class="flex-fill overflow-y-auto pa-0 ma-0"
                     v-bind="{maxHeight: contentHeight}">
              <v-sheet class="pa-1 ma-1">
                <!--                <v-text-field-->
                <!--                    v-model="query"-->
                <!--                    label="Solo"-->
                <!--                    placeholder="Placeholder"-->
                <!--                    solo-->
                <!--                    style="margin-bottom: -30px"-->
                <!--                ></v-text-field>-->
              </v-sheet>
              <v-treeview :items="items2"
                          open-on-click hoverable class="pa-0 ma-0">
                <template v-slot:label="{ item }" class="pa-0 ma-0">
                  <div @click="onClickButton(item)"
                       style="width:100%; margin-left: 0px; padding:10px">
                    <!--                    {{ item.name }} aaaaaaaaaaaaaaaaaa-->
                    <!--                    <v-card style="margin: 0px; margin-left: 100px; padding: 0px;">-->
                    <!--                      <v-card-text>aaaaaaaaaaaaaa</v-card-text>-->
                    <!--                    </v-card>-->
                    <!--                    <v-btn style="width:100%;" class="flex-fill" color="red">aaaaaaaaaaaaaaaaaaa</v-btn>-->
                    <div style="margin-left: 100px;">
                      {{ item.name }}
                    </div>
                  </div>
                  <!--                  <div @click="active ? $event.stopPropagation() : null" style="width:100%; background-color: #00b0ff">-->
                  <!--                    {{ item.name }}-->
                  <!--                  </div>-->
                </template>
              </v-treeview>
              <!--                  <v-card>aaaaaaax</v-card>-->
            </v-sheet>
          </v-layout>
        </v-container>
      </SplitArea>
      <SplitArea :size="75">
        <v-layout>
          <v-container>
            <v-row class="pa-1 ma-1">
              <v-text-field
                  v-model="query"
                  label="Solo"
                  placeholder="Placeholder"
                  solo
                  style="margin-bottom: -30px"
              ></v-text-field>
            </v-row>
<!--            <v-row>-->
<!--              {{ found }}-->
<!--            </v-row>-->
            <v-row v-for="item in found" :key="item.id" class="pa-1 ma-1">
              <v-card class="pa-3">
                <v-card-title>{{ item.id }}</v-card-title>
                <Editor v-model="text"
                        lang="javascript"
                        theme="monokai"
                        :content-size="contentHeight"
                ></Editor>
                <pre v-highlightjs="item.name"><code class="javascript"></code></pre>
                {{ item }}
              </v-card>
            </v-row>
            <!--            <v-row>-->
            <!--              <Editor v-model="text"-->
            <!--                      lang="javascript"-->
            <!--                      theme="monokai"-->
            <!--                      :content-size="contentHeight"-->
            <!--              ></Editor>-->
            <!--            </v-row>-->
            <!--            <div v-for="item in found" :key="item.id">-->
            <!--              <v-card>-->
            <!--                {{item}}-->
            <!--              </v-card>-->
            <!--            </div>-->
          </v-container>
          <!--          <v-sheet style="background-color: #272822" class="flex-fill">-->
          <!--          <v-sheet style="background-color: white" class="flex-fill">-->


          <!--            <v-textarea-->
          <!--                no-resize-->
          <!--                solo-->
          <!--                name="input-7-4"-->
          <!--                label="Solo textarea"-->
          <!--                v-model="text"-->
          <!--                style="width: 100%"-->
          <!--            ></v-textarea>-->

          <!--          </v-sheet>-->
        </v-layout>
      </SplitArea>
    </Split>

    <!--    <v-treeview :items="items" open-on-click hoverable activatable dense></v-treeview>-->

  </div>
</template>

<script>

import TopEditor from "@/components/TopEditor";
import Editor from "@/components/editor/Editor";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('@/config')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const factory = require('@/modules/doc_factory')

import path from 'path'
import Datastore from 'nedb'

import {remote} from 'electron';

// import { DbManager } from ''


const {app} = remote; // or `const app = remote.app`

export default {
  /* eslint-disable vue/no-unused-components */

  // el: '#test100',
  name: "MainLayout",
  components: {Editor, TopEditor},
  db: null,
  dbData: {},
  data: function () {
    return {
      query: '',
      active: [],
      selected: null,
      text: '',
      items: {},
      found: [],
      element: Element,
      appBarHeight: 0,
      height: 100,
      contentHeight: 100
    };
  },
  watch: {
    width: {
      handler: function (val, oldVal) {
        console.log(val, oldVal)
      },
      deep: true
    },
    query: function (val) {
      console.log(val)
      this.getSearchedItems();
    }
    // active: {
    //   handler: function (val, oldVal) {
    //     console.log(val, oldVal)
    //   },
    //   deep: true
    // }
  },
  created() {


    // const file = path.join(app.getPath('userData'), 'data.db')
    // this.db = new Datastore({filename: file})
    // console.log(file)
    // this.db.loadDatabase(function (error) {
    //   if (error) {
    //     console.log('FATAL: local database could not be loaded. Caused by: ' + error);
    //     throw error;
    //   }
    //   console.log('INFO: local database loaded successfully.');
    // });
    // this.db.find({}, (err, doc) => {
    //   this.dbData = doc;
    //   this.items = doc;
    //   console.log(doc)
    // })

    // console.log('-----------');
    // const b = factory.addNew(0);
    // console.log(b)




    console.log('-----------')
    console.log(config.name)
    console.log(global.config.name)
    console.log('-----------2')

    // const config = remote.getGlobal('config')

  },
  mounted() {
    // 要素の幅を取得するメソッド
    this.onWindowSizeChanged()
    // ユーザーがウィンドウサイズを変更したら実行されるようにする
    window.addEventListener('resize', this.onWindowSizeChanged)
    this.getSearchedItems()
  },
  methods: {
    onWindowSizeChanged() {
      this.element = this.$refs.getParentWidth.$el
      this.appBarHeight = this.element.clientHeight;
      this.contentHeight = window.innerHeight - this.appBarHeight
    },
    onClickButton(item) {
      // eslint-disable-next-line no-prototype-builtins
      if (!item.hasOwnProperty('children')) {
        this.selected = item;
      }
    },
    onClick() {
      console.log('sasasasa')
    },
    getSearchedItems() {
      this.db.find({name: new RegExp(this.query)}, (err, docs) => {
        console.log(docs)
        if (docs) this.found = docs;
      });
    },
    createNewNote() {
      console.log("a")
    }
  },
  computed: {
    width: function () {
      return window.innerWidth
    },
    disp: function () {
      return this.active;
    },
    pageContent: function () {
      return this.selected;
    },
    code: function () {
      let code = ""
      return code;
    },
    searchedItems: function () {
      return this.db.find({name: `${this.query}`}, function (err, docs) {
        return docs;
      });
    }
  },
}
</script>

<style scoped lang="scss">

</style>
