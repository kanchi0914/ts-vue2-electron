import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Datastore from 'nedb';
import path from 'path';
import {remote} from 'electron';
const {app} = remote; // or `const app = remote.app`


const globalAny:any = global;


Vue.config.productionTip = false;

// @ts-ignore
import jQuery from 'jquery'
// globalAny.jquery = jQuery
// globalAny.$ = jQuery
// globalAny.$ = globalAny.jQuery = require('jquery')


// @ts-ignore
import VueDraggableResizable from 'vue-draggable-resizable'

// @ts-ignore
import VueResizable from 'vue-resizable'

// const VueResizable = require('vue-resizable')
Vue.component('vue-resizable', VueResizable)

Vue.component('vue-draggable-resizable', VueDraggableResizable)


//const file = path.join(app.getAppPath(), 'data.db')
// const collectionsDb: Datastore = new Datastore({ filename: path.join(app.getPath("userData"), "Collections.db"), autoload: true });
// let db = new Datastore({filename: file})

// globalAny.collectionDb = db;
// const globalAny:any = global;
// globalAny.collectionsDb = collectionsDb;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
