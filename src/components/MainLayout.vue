<template>
  <div id="test100">
    <v-app-bar flat ref="getParentWidth">
    </v-app-bar>
    <Split :style="{height: contentHeight + 'px'}">
      <SplitArea :size="25">
        <v-container fluid id="size" :style="{height: contentHeight + 'px'}" class="pa-0 ma-0">
          <v-layout fill-height class="pa-0 ma-0">
            <v-sheet class="flex-fill overflow-y-auto pa-0 ma-0"
                     v-bind="{maxHeight: contentHeight}">
              <v-sheet class="pa-1 ma-1">

                <div v-for="n in 100" :key="n">
                  {{n}}
                </div>
              </v-sheet>
            </v-sheet>
          </v-layout>
        </v-container>
      </SplitArea>
      <SplitArea :size="75">
        <TestCom4></TestCom4>
      </SplitArea>
    </Split>
  </div>
</template>

<script>

import TopEditor from "@/components/TopEditor";
import Editor from "@/components/editor/Editor";
import TestCom4 from "@/components/TestCom4";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('@/config')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const factory = require('@/modules/doc_factory')

import path from 'path'
import Datastore from 'nedb'

import {remote} from 'electron';
import Nedb from "nedb";

// import { DbManager } from ''


const {app} = remote; // or `const app = remote.app`

export default {
  /* eslint-disable vue/no-unused-components */

  // el: '#test100',
  name: "MainLayout",
  components: {Editor, TopEditor, TestCom4},
  // db: null,
  // dbData: {},
  data: function () {
    return {
      query: '',
      active: [],
      selected: null,
      text: '',
      items: null,
      found: [],
      element: Element,
      appBarHeight: 0,
      height: 100,
      contentHeight: 100,
      db: null
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
    console.log('start!')
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
      this.db.find({}, (err, users) => {
        console.log('udsafsdfasf')
      });
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
