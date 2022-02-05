import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Datastore from 'nedb';
import path from 'path';
import {remote} from 'electron';
const {app} = remote; // or `const app = remote.app`
const ipcMain = remote.ipcMain
const globalAny:any = global;
// const config = require('./config')

// const db = new Nedb<Document>({filename: path.join(app.getPath('home'), 'myTestDb.db'), autoload: true})
const db = new Nedb<Document>({filename: path.join(app.getPath('home'), 'myTestDb3.db'), autoload: true})

// @ts-ignore
global.config = {
  name: "dasdasdsa!!!!!",
  db:db
}

// globalAny.config = {
//   name: "test!!"
// }

// require("brace/mode/text");
// require("brace/mode/assembly_x86");
// require("brace/mode/c_cpp");
// require("brace/mode/clojure");
// require("brace/mode/csharp");
// require("brace/mode/dart");
// require("brace/mode/elixir");
// require("brace/mode/elm");
// require("brace/mode/golang");
// require("brace/mode/haskell");
// require("brace/mode/html");
// require("brace/mode/java");
// require("brace/mode/javascript");
// require("brace/mode/json");
// require("brace/mode/jsx");
// require("brace/mode/jade");
// require("brace/mode/kotlin");
// require("brace/mode/liquid");
// require("brace/mode/makefile");
// require("brace/mode/markdown");
// require("brace/mode/ocaml");
// require("brace/mode/perl");
// require("brace/mode/pgsql");
// require("brace/mode/php");
// require("brace/mode/powershell");
// require("brace/mode/python");
// require("brace/mode/r");
// require("brace/mode/ruby");
// require("brace/mode/rust");
// require("brace/mode/scss");
// require("brace/mode/sh");
// require("brace/mode/sql");
// require("brace/mode/swift");
// require("brace/mode/typescript");
// require("brace/mode/vbscript");
// require("brace/mode/xml");
// require("brace/theme/monokai");

console.log('ssssssssq')

Vue.config.productionTip = false;

// @ts-ignore
import jQuery from 'jquery'
// globalAny.jquery = jQuery
// globalAny.$ = jQuery
// globalAny.$ = globalAny.jQuery = require('jquery')


import 'highlight.js/styles/default.css'

// @ts-ignore
import VueDraggableResizable from 'vue-draggable-resizable'

// @ts-ignore
import VueResizable from 'vue-resizable'

// @ts-ignore
import VueSplit from 'vue-split-panel'
Vue.use(VueSplit)

// @ts-ignore
import VueHighlightJS from 'vue-highlightjs'
import Nedb from "nedb";
import {element} from "emmet/dist/src/markup/format/indent-format";
Vue.use(VueHighlightJS)


// const VueResizable = require('vue-resizable')
Vue.component('vue-resizable', VueResizable)
Vue.component('vue-draggable-resizable', VueDraggableResizable)


//const file = path.join(app.getAppPath(), 'data.db')
// const collectionsDb: Datastore = new Datastore({ filename: path.join(app.getPath("userData"), "Collections.db"), autoload: true });
// let db = new Datastore({filename: file})

// globalAny.collectionDb = db;
// const globalAny:any = global;
// globalAny.collectionsDb = collectionsDb;

// const fs = remote.require('fs')
// console.log(ipcMain)
//
// //
// ipcMain.on('synchronous-message', (event, arg) => {
//   console.log(arg) // prints "ping"
//   event.returnValue = 'pong'
// })
//
// ipcMain.on('synchronous-message', (event, arg) => {
//   console.log(arg) // prints "ping"
//   event.returnValue = 'pong'
// })

console.log(process.versions.electron)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
