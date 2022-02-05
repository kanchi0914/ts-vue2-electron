<template>
  <div>
    <div class="text-center">
      <v-dialog
          v-model="dialog"
          max-width="1000px"
      >
        <v-sheet height="800px">
          <v-row class="pa-1 ma-1">
            <v-col cols="8" align-self="center">
              <!--              <div v-if="edit && edit.image.base64">-->
              <v-card v-if="edit && edit !== undefined && edit.image !==undefined && edit.image.base64">
                <v-img v-bind:src="fullName(edit.image)" max-height="600px" contain></v-img>
              </v-card>
              <!--              </div>-->
            </v-col>
            <v-col cols="4">
              <v-card>
                <!--                  <v-card-title class="text-h5 grey lighten-2">-->
                <!--                    {{ edit.title }}-->
                <!--                  </v-card-title>-->
                <v-text-field class="ma-2" label="title" @change="(value) => onChange(value, 'title', edit)"
                              :value="edit.title"></v-text-field>
                <!--                <v-text-field class="ma-2" label="author" @change="(value) => onChange(value, 'author', edit)"-->
                <!--                              :value="edit.author"></v-text-field>-->


                <v-combobox
                    class="ma-2" label="author"
                    dense
                    :items="authorsList"
                    @change="(value) => onChange(value, 'author', edit)"
                    :value="edit.author"
                ></v-combobox>

                <v-combobox
                    class="ma-2"
                    v-model="edit.tags"
                    :items="tagList"
                    :search-input.sync="search"
                    hide-selected
                    @change="(value) => onChange(value, 'tags', edit)"
                    label="tags"
                    multiple
                    small-chips
                    deletable-chips
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new
                          one
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-combobox>

                <v-text-field label="path" readonly class="ma-2" :value="absPath">
                </v-text-field>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="orange"
                      text
                      @click="openDir()"
                  >
                    Open
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>

      </v-dialog>
    </div>
    <!--    {{base}}-->
    <!--    {{works}}-->

    <div>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-row>
              <h2>
                Notes:
              </h2>
            </v-row>
            <v-btn @click="init">all</v-btn>
            <v-btn>untagged</v-btn>
            <v-row>
              <v-divider></v-divider>
            </v-row>
            <v-row>
              <h2>
                Artists:
              </h2>
            </v-row>
            <v-row>
              <v-col>
                <v-chip @click="serachByAuthor(author)" class="pa-2 ma-2" v-for="author in authorsList" :key="author">
                  {{ author }}
                </v-chip>
              </v-col>
            </v-row>
            <v-row>
              <v-divider></v-divider>
            </v-row>
            <v-row>
              <h2>
                Tags:
              </h2>
            </v-row>
            <v-row>
              <v-col>
                <v-chip @click="searchByTag(tag)" class="pa-2 ma-2" v-for="tag in tagList" :key="tag">
                  {{ tag }}
                </v-chip>
              </v-col>
            </v-row>

            <!--          <ul>-->
            <!--            <li v-for="title in titleList">-->
            <!--              {{ title }}-->
            <!--            </li>-->
            <!--          </ul>-->
          </v-col>
          <v-col cols="10">

            <div>
              <v-container>
                <v-row class="pa-2 ma-2">
                  <!--          <v-text-field placeholder="search"></v-text-field>-->
                  <v-combobox
                      class="ma-2"
                      dense
                      :items="getAA()"
                      placeholder="search"
                      @input="doSearch"
                      v-model="searchWord">
                    <!--              @keyup.enter="doSearch"-->
                  </v-combobox>
                </v-row>
              </v-container>
            </div>


            <div>
              <v-container>
                <v-row>
                  <v-col v-for="work in works" :key="work.path" align="center"
                         justify="center">
                    <v-card max-width="400px" class="ma-1 pa-1">
                      <v-card-title @click="edit = work; dialog = true" v-if="work.author"> [{{
                          work.author
                        }}]{{ work.title }}
                      </v-card-title>
                      <v-card-title @click="edit = work; dialog = true" v-else> {{ work.title }}</v-card-title>
                      <v-row class="pa-0 ma-0">
                        <v-btn plain depressed icon v-model="work.isFavorite" @click="fab(work)">
                          <v-icon v-if="!work.isFavorite">mdi-heart</v-icon>
                          <v-icon v-else color="pink">mdi-heart</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-card-subtitle>{{ formatDate(work.createdAt, 'yyyy-MM-dd') }}</v-card-subtitle>
                      </v-row>
                      <v-row class="pa-1 ma-1">
                        <v-spacer></v-spacer>
                        <v-chip v-for="tag in work.tags" :key="tag"
                                class="ma-2"
                        >
                          {{ tag }}
                        </v-chip>
                      </v-row>


                      <div v-if="work.image.base64">
                        <v-img v-bind:src="fullName(work.image)" width="250px"></v-img>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!--    <ul>-->
    <!--      <li v-for="work in works" :key="work.path">-->
    <!--        -->
    <!--        {{ work.updatedAt }}-->
    <!--        <v-textarea rows="1"-->
    <!--                    auto-grow-->
    <!--                    outlined-->
    <!--                    @change="(value) => onChange(value)"-->
    <!--                    :value="work.title">-->
    <!--        </v-textarea>-->
    <!--&lt;!&ndash;        <input value="aa" type="text" @focus="onFocus()" @blur="onFocusOut()" />&ndash;&gt;-->
    <!--        &lt;!&ndash;        {{ work.image }}&ndash;&gt;-->
    <!--        <div v-if="work.image.base64">-->
    <!--          <v-img v-bind:src="fullName(work.image)" width="100px"></v-img>-->
    <!--        </div>-->
    <!--      </li>-->
    <!--    </ul>-->

    <!--    <ul>-->
    <!--      <li v-for="work in works" :key="work.title">-->
    <!--        {{ work.title }}-->
    <!--        {{ work.image }}-->
    <!--        <div v-if="work.image.base64">-->
    <!--          <v-img v-bind:src="fullName(work.image)" width="100px"></v-img>-->
    <!--        </div>-->
    <!--      </li>-->
    <!--    </ul>-->


    <!--    <ul>-->
    <!--      <li v-for="work in disps" :key="work.path">-->
    <!--        {{ work.title }}-->
    <!--        <v-img v-bind:src="fullName(work.image)" width="100px"></v-img>-->
    <!--      </li>-->
    <!--    </ul>-->
    <!--    {{images}}-->
    <!--    <ul>-->
    <!--      <li v-for="image in images" :key="image.name">-->
    <!--        aaaaaaaaa-->
    <!--        {{ image.path }}-->
    <!--        {{ image.base64 }}-->
    <!--        {{ fullName(image) }}-->
    <!--&lt;!&ndash;        <img v-bind:src="'data:image/png;base64,' + image.base64" width="100px">&ndash;&gt;-->
    <!--        <v-img v-bind:src="fullName(image)" width="100px"></v-img>-->
    <!--&lt;!&ndash;        <img v-bind:src="fullName(image)" width="100px">&ndash;&gt;-->
    <!--&lt;!&ndash;        <img v-bind:src="image.path">&ndash;&gt;-->

    <!--&lt;!&ndash;        <img v-bind:src="image.path">&ndash;&gt;-->
    <!--      </li>-->
    <!--    </ul>-->
  </div>

</template>

<script>
// const {ipcRenderer} = require('electron')
// import {remote} from 'electron';
// const ipcRenderer = remote.ipcMain
const fs = require('fs')
import path from 'path'
import {remote, shell} from 'electron'
import {Work} from "@/modules/work";


const {app} = remote; // or `const app = remote.app`

export default {
  name: "TestCom4",
  data: () => {
    return {
      rootDir: 'S:\\elec_test',
      model: ['Vuetify'],
      search: null,
      countries: ['aa', 'bbbbb'],
      titles: new Set(),
      authors: new Set(),
      tags: new Set(),
      testList: [{name: 'aaa', age: 20}, {name: 'bbb', age: 20}, {name: 'ccc', age: 20}],
      tmptitle: null,
      db: null,
      country: null,
      works: [],
      disps: [],
      images: [],
      edit: {},
      dialog: false,
      base: null,
      selected: null,
      items: ["Anton", "Andrey", "Sasha", "Vladimir", "Dima"],
      tmpTags: ['aaaaa', 'bbbbb', 'ccccc'],
      searchWord: null,
      dispImages: []
    }
  },
  created() {
    this.db = global.config.db
    this.init(true)
  },
  computed: {
    base64Url(image) {
      return `data:image/${image.extention};base64,${image.base64}`
    },
    fullName: function () {
      var vm = this;
      return function (image) {
        return `data:image/${image.extention};base64,${image.base64}`
      };
    },
    disp3() {
      for (const work of this.works) {
        this.setImage(work, work.path)
      }
      // this.$forceUpdate()
      return this.works
    },

    getAsSet() {
      return this.authors
    },
    fromComputed() {
      return this.testList.slice().reverse();
    },
    absPath() {
      return this.edit.path ? path.join(this.rootDir, this.edit.path) : this.rootDir
    },
    titleList: {
      cache: false,
      get() {
        return Array.from(this.titles)
      }
    },
    authorsList: {
      cache: false,
      get() {
        return Array.from(this.authors)
      }
    },
    tagList: {
      cache: false,
      get() {
        return Array.from(this.tags)
      }
    },
    allSuggestion() {
      // console.log(this.tagList)
      // console.log(this.getFromMethod())
      return this.titleList.concat(this.authorsList, this.tagList)
    }
  },
  methods: {
    fab(item) {
      console.log(item.path)
      item.isFavorite = !item.isFavorite
      this.db.update({path: item.path}, {$set: {isFavorite: item.isFavorite}},
          {},
          (err, doc) => {
            if (!err) console.log('don!')
          })
    },
    openDir() {
      shell.openPath(this.absPath)
    },
    serachByAuthor(author){
      const keys = fs.readdirSync(this.rootDir)
      this.works = []
      this.db.find({author: author}, (err, docs) => {
        // docs = docs.filter(d => keys.includes(d.author))
        for (const doc of docs) {
          this.setImage(doc, doc.title)
          this.works.push(doc)
        }
      })
    },
    searchByTag(tag) {
      const names = fs.readdirSync(this.rootDir)
      this.works = []
      this.db.find({tags: new RegExp(tag)}, (err, docs) => {
        docs = docs.filter(d => names.includes(d.title))
        for (const doc of docs) {
          this.setImage(doc, doc.title)
          this.works.push(doc)
        }
      })
    },
    doSearch() {
      const names = fs.readdirSync(this.rootDir)
      this.works = []
      console.log(this.searchWord)
      // const word = this.夏コミコピー本searchWord
      const word = this.searchWord
      this.db.find({$or: [{title: new RegExp(word)}, {author: new RegExp(word)}, {tags: new RegExp(word)}]}, (err, docs) => {
        docs = docs.filter(d => names.includes(d.title))
        for (const doc of docs) {
          this.setImage(doc, doc.title)
          this.works.push(doc)
        }
      })
    },
    inputSearch() {
      console.log(this.searchWord)
    },
    getFromMethod() {
      return Array.from(this.authors)
    },
    formatDate(date, format) {
      format = format.replace(/yyyy/g, date.getFullYear());
      format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
      format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
      format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
      format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
      format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
      format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
      return format;
    },
    getAA() {
      return this.titleList.concat(this.authorsList, this.tagList)
    },
    onChange(value, prop, item) {
      switch (prop) {
        case 'title':
          this.works.find(work => work.path === item.path).title = value
          this.db.update({path: item.path}, {$set: {title: value}},
              {},
              (err, doc) => {
                if (!err) console.log('don!')
              })
          break
        case 'author':
          this.works.find(work => work.path === item.path).author = value
          this.db.update({path: item.path}, {$set: {author: value}},
              {},
              (err, doc) => {
                if (!err) console.log('don!')
              })
          this.authors.add(value)
          break
        case 'tags':
          this.db.update({path: item.path}, {$set: {tags: value}},
              {},
              (err, doc) => {
                if (!err) console.log('don_tagss!')
              })
          for (const tag of value){
            this.tags.add(tag)
          }
          break
      }
    },
    onFocus(obj) {
      console.log('aaa')
      console.log(obj)
    },
    onFocusOut(obj) {
      console.log('bbb')
      console.log(obj)
    },
    init(isFirst = true) {
      this.db.find({}, (err, docs) => {
        for (const doc of docs) {
          if (!doc.title) continue
          if (doc.tags.length > 0) doc.tags.forEach(t => this.tags.add(t))
          this.titles.add(doc.title)
          this.authors.add(doc.author)
        }
      })
      const keys = fs.readdirSync('S:\\elec_test')
      for (const key of keys) {
        this.db.find({path: `${key}`}, (err, doc) => {
          const dirPath = path.join('S:\\elec_test', key)
          // new doc
          if (doc.length !== 0) {
            if (isFirst) {
              const work = doc[0]
              this.setImage(work, key)
              if (!work.createdAt) {
                fs.stat(dirPath, (err, stats) => {
                  work.createdAt = stats.birthtime
                  this.db.update({path: key}, {$set: {createdAt: stats.birthtime}},
                      {},
                      (err, doc) => {
                        if (!err) console.log('updated date!!')
                      })
                })
              }
              this.works.push(work)
            }
          } else {
            const work = this.createWork(key)
            this.setImage(work, key)
            // 作成日
            fs.stat(dirPath, (err, stats) => {
              work.createdAt = stats.birthtime
              this.works.push(work)
              this.db.insert(work, (err, res) => {
                console.log(res)
              })
            })
          }
        })
      }
    },
    sort(dec) {
      const names = fs.readdirSync('S:\\elec_test')
      this.works = []
      this.db.find({}, (err, docs) => {
        docs = docs.filter(d => names.includes(d.title))
        if (dec) {
          docs.sort((a, b) => (a.title > b.title) ? 1 : -1)
        } else {
          docs.sort((a, b) => (a.title < b.title) ? 1 : -1)
        }
        console.log(docs)
        for (const doc of docs) {
          this.setImage(doc, doc.title)
          this.works.push(doc)
        }
      })
    },
    setImage(work, dirName) {
      let image = {};
      image.name = dirName;
      const dirPath = path.join('S:\\elec_test', dirName)
      const images = fs.readdirSync(dirPath)
      const imagePath = path.join(dirPath, images[0])
      console.log(imagePath)
      image.base64 = null
      fs.readFile(imagePath, (err, file) => {
        image.base64 = new Buffer(file).toString('base64');
        // console.log(image.base64)
      })
      image.path = imagePath
      image.extention = path.extname(images[0]).split('.')[1]
      work.image = image
      this.base = image
    },
    loadImages() {
      // const images = fs.readdirSync(this.absPath)

    },
    disp2() {
      for (const work of this.works) {
        this.setImage(work, work.path)
      }
      return this.works
      // return [1,2,3]
    },
    display() {
      console.log('sasas')
      const work = this.works[0]
      console.log(work)
      // let image = {};
      // image.name = work.name;
      // const dirPath = path.join('S:\\elec_test', name)
      // const images = fs.readdirSync(dirPath)
      // const imagePath = path.join(dirPath, images[0])
      // fs.readFile(imagePath, (err, file) => {
      //   image.base64 = new Buffer(file).toString('base64');
      // })
      // image.path = imagePath
      // image.extention = path.extname(images[0]).split('.')[0]
      // work.image = image
      this.disps.push(work)
    },
    createWork(path) {
      let work = new Work(path)
      work.title = path
      return (work)
    }
  }
}
</script>

<style scoped>

</style>
