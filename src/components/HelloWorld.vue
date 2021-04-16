<template lang="html">
  <div>
    <div id="app-5">
      <v-app-bar>aaaa</v-app-bar>
      <!--      <v-container>-->
      <!--        <v-col>-->
      <!--          <v-row></v-row>-->
      <!--        </v-col>-->
      <!--      </v-container>-->
      <!--      <v-btn @click="onClick">click to save</v-btn>-->
      <!--      <v-btn @click="onClickSecond">click to load</v-btn>-->
      <!--      <v-container-->
      <!--          v-for="align in alignments"-->
      <!--          :key="align"-->
      <!--      >-->
      <!--        <v-row-->
      <!--            :align="align"-->
      <!--            no-gutters-->
      <!--            style="height: 30px;"-->
      <!--        >-->
      <!--          <v-col-->
      <!--              v-for="n in 3"-->
      <!--              :key="n"-->
      <!--          >-->
      <!--            <v-card-->
      <!--                class="pa-2"-->
      <!--                outlined-->
      <!--                tile-->
      <!--            >-->
      <!--              One of three columns-->
      <!--            </v-card>-->
      <!--          </v-col>-->
      <!--        </v-row>-->
      <!--      </v-container>-->

      <!--      <v-container class="grey lighten-5" style="height: 300px">-->
      <!--        <v-row style="height: 300px">-->
      <!--          <v-col cols="4" class="d-flex pa-0">-->
      <!--            <v-sheet color="red" class="flex-fill overflow-y-auto" max-height="300">-->
      <!--              <v-card v-for="n in 20" :key="n" color="red">{{ n }}</v-card>-->
      <!--            </v-sheet>-->
      <!--          </v-col>-->
      <!--          <v-col cols="8" class="d-flex pa-0">-->
      <!--            <v-sheet color="blue" class="flex-fill">bbbb</v-sheet>-->
      <!--          </v-col>-->
      <!--        </v-row>-->
      <!--      </v-container>-->
      <!--      <v-card-->
      <!--          v-scroll.self="onScroll"-->
      <!--          class="overflow-y-auto"-->
      <!--          max-height="400"-->
      <!--      >-->
      <!--        <v-card-text>-->
      <!--          <div-->
      <!--              v-for="n in 12"-->
      <!--              :key="n"-->
      <!--              class="mb-4"-->
      <!--          >-->
      <!--            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi earum tenetur. Asperiores dolorem-->
      <!--            placeat ab nobis iusto culpa, autem molestias molestiae quidem pariatur. Debitis beatae expedita nam facere-->
      <!--            perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus cupiditate rerum-->
      <!--            officiis consequuntur laborum doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam at corporis,-->
      <!--            similique ratione quasi illo!-->
      <!--          </div>-->
      <!--        </v-card-text>-->
      <!--      </v-card>-->
      <!--    </div>-->

      <div style="height: 100px; border: 1px solid blue;">
        <!-- add any elements you would like to drag & resize-->
              <vue-draggable-resizable :parent="true" style="border: 1px solid black;">
                <img src="../assets/logo.png">
                <p>You can drag, you can resize, but you cannot move me outside the parent.</p>
              </vue-draggable-resizable>
      </div>
    </div>

    <!--    <span>Message: {{ msg }}</span>-->
    <!--    <div v-if="true">sssss</div>-->
    <!--    <div>{{ correct }}</div>-->
    <!--    <div>aaaaaaa : {{ to2 }}</div>-->
    <!--    <p>Computed reversed message: "{{ reversedMessage }}"</p>-->

  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { app } from 'electron';

// const {remote} = require('electron');
import {remote} from 'electron';

const {app} = remote; // or `const app = remote.app`

import path from 'path'
import Datastore from 'nedb'

export default Vue.extend({
  el: "#app-5",

  data: function () {
    return {
      message: 'Hello Vue.js!',
      msg: 'korehadekai',
      file: '',
      db: null,
      alignments: [
        'start',
        'center',
        'end',
      ],
    };
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  // computed(): void {
  //   const file = path.join(app.getPath('userData'), 'data.db')
  //   const db = new Datastore({filename:file, autoload:true})
  //   db.loadDatabase(function (error: Error) {
  //     if (error) {
  //       console.log('FATAL: local database could not be loaded. Caused by: ' + error);
  //       throw error;
  //     }
  //     console.log('INFO: local database loaded successfully.');
  //   });
  //   // データを挿入
  //   db.insert({time:new Date().getTime()})
  // },
  created: function () {
    // console.log("---------")
    // console.log(this.msg)
    // const file = path.join(app.getPath('userData'), 'data.db')
    // let db0 = new Datastore({filename: file})
    // db0.insert({time: new Date().getTime()})
    // db0.find({}, (error, docs) => {
    //   console.log(docs)
    // })
    // console.log("---------")
    //const file = path.join(app.getPath('userData'), 'data.db')

    // this.db = remote.getGlobal('db');
    // console.log("---111111------")
    // console.log(remote.getGlobal('collectionDb'))
    // this.db = remote.getGlobal('collectionDb');

    const file = path.join(app.getPath('userData'), 'data.db')
    console.log(file)
    this.db = new Datastore({filename: file})
    this.db.loadDatabase(function (error: Error) {
      if (error) {
        console.log('FATAL: local database could not be loaded. Caused by: ' + error);
        throw error;
      }
      console.log('INFO: local database loaded successfully.');
    });
    // this.db.insert({time: new Date().getTime()})

  },

  // beforeCreate() {
  //   console.log(this.$data.msg)
  // },
  // mounted() {
  // },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    onClick: function () {
      console.log("---------")
      this.db.insert({time: new Date().getTime()})
      this.db.find({}, (error, docs) => {
        console.log(docs)
      })
      console.log("---------")
      // this.db.insert({time: new Date().getTime()})
    },
    onClickSecond: function () {
      this.db.find({}, (error, docs) => {
        console.log(docs)
      })
    }
  }
});
</script>