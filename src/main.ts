import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Datastore from 'nedb';
import path from 'path';
import {remote} from 'electron';
const {app} = remote; // or `const app = remote.app`

Vue.config.productionTip = false;

import VueDraggableResizable from 'vue-draggable-resizable'

Vue.component('vue-draggable-resizable', VueDraggableResizable)

//const file = path.join(app.getAppPath(), 'data.db')
// const collectionsDb: Datastore = new Datastore({ filename: path.join(app.getPath("userData"), "Collections.db"), autoload: true });
// let db = new Datastore({filename: file})
// const globalAny:any = global;
// globalAny.collectionDb = db;
// const globalAny:any = global;
// globalAny.collectionsDb = collectionsDb;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
