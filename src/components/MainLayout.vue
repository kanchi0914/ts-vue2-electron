<template>
  <div id="test100">
    <v-app-bar ref="getParentWidth"></v-app-bar>
    <Split :style="{height: contentHeight + 'px'}">
      <SplitArea :size="25">
        <v-container fluid id="size" :style="{height: contentHeight + 'px'}" class="pa-0 ma-0">
          <v-layout fill-height class="pa-0 ma-0">
            <v-sheet color="red" class="flex-fill overflow-y-auto pa-0 ma-0"
                     v-bind="{maxHeight: contentHeight}">
              <v-treeview :items="items"
                          open-on-click hoverable class="pa-0 ma-0">
                <template v-slot:label="{ item }" class="pa-0 ma-0">
                  <div @click="onClickButton(item)" style="width:100%; background-color: #00b0ff; margin-left: 0px; padding:10px">
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
        <v-layout fill-height class="pa-0 ma-0">
          <v-sheet color="blue" class="flex-fill">
            {{this.pageContent}}
          </v-sheet>
        </v-layout>
      </SplitArea>
    </Split>

    <!--    <v-treeview :items="items" open-on-click hoverable activatable dense></v-treeview>-->

  </div>
</template>

<script>

export default {
  // el: '#test100',
  name: "MainLayout",
  data: function () {
    return {
      active: [],
      selected: null,
      items: [
        {
          id: 0,
          name: 'Item1',
          children: [
            {id: 1, name: 'Calendar : app'},
          ]
        },
        {
          id: 2,
          name: 'Item2',
          children: [
            {id: 3, name: 'Calendar : app'},
            {id: 4, name: 'Chrome : app'},
          ]
        },
        {name: 'test'}
      ],
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
    active: {
      handler: function (val, oldVal) {
        console.log(val, oldVal)
      },
      deep: true
    }
  },
  mounted() {
    // 要素の幅を取得するメソッド
    this.onWindowSizeChanged()
    // ユーザーがウィンドウサイズを変更したら実行されるようにする
    window.addEventListener('resize', this.onWindowSizeChanged)
  },
  methods: {
    onWindowSizeChanged() {
      this.element = this.$refs.getParentWidth.$el
      this.appBarHeight = this.element.clientHeight;
      // console.log(window.innerHeight)
      this.contentHeight = window.innerHeight - this.appBarHeight
      console.log(this.contentHeight)
      //this.width = el.clientWidth
      // console.log(window.innerWidth, window.outerWidth, window.naturalWidth)
    },
    onClickButton(item) {
      // if (this.selected === null) {
      //   this.selected = this.preActive = item;
      //   // this.preActive = item;
      //   // this.active = this.preActive;
      // } else {
      //   this.preActive = this.active;
      // }
      // eslint-disable-next-line no-prototype-builtins
      if (!item.hasOwnProperty('children')){
        this.selected = item;
        console.log(this.selected)
      }
      console.log(this.selected)
    }
    // onUpdate() {
    //   if (this.active.length == 0) {
    //     this.active = this.preActive;
    //   } else {
    //     this.preActive = this.active;
    //   }
    //   console.log(this.active)
    // }
  },
  computed: {
    width: function () {
      return window.innerWidth
    },
    disp: function () {
      return this.active;
    },
    pageContent: function (){
      return this.selected;
    }
  },
}
</script>

<style scoped lang="scss">

</style>