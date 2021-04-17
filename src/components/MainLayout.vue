<template>
  <div id="test100">

    <!--    <v-container fluid>-->
    <!--      <v-sheet color="blue" class="flex-fill">aaaaaaaaa</v-sheet>-->
    <!--    </v-container>-->
    <!--    <v-sheet height="1000px" color="red" class="flex align-stretch">red sheet</v-sheet>-->
    <!--      <v-container>-->
    <!--        <v-row>-->
    <!--          <v-col cols="4" class="d-flex pa-0">-->
    <!--            <v-sheet color="red" class="flex-fill overflow-y-auto">-->
    <!--              <v-card v-for="n in 20" :key="n" color="red">{{ n }}</v-card>-->
    <!--            </v-sheet>-->
    <!--          </v-col>-->
    <!--          <v-col cols="8" class="d-flex pa-0">-->
    <!--            <v-sheet color="blue" class="flex-fill">bbbb</v-sheet>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--      </v-container>-->
    <v-app-bar ref="getParentWidth"></v-app-bar>
    <v-container id="size" :style="{height: contentHeight + 'px'}">
      <v-layout fill-height>
        <v-row>
          <v-col cols="4" class="d-flex pa-0">
            <v-sheet color="red" class="flex-fill overflow-y-auto" v-bind="{maxHeight: contentHeight}">
              <v-card v-for="n in 20" :key="n" color="red">{{ n }}</v-card>
            </v-sheet>
          </v-col>
          <v-col cols="8" class="d-flex pa-0">
            <v-sheet color="blue" class="flex-fill">bbbb</v-sheet>
          </v-col>
        </v-row>
      </v-layout>

    </v-container>

  </div>
</template>

<script>
export default {
  el: '#test100',
  name: "MainLayout",
  data: function () {
    return {
      element: Element,
      appBarHeight: 0,
      height: 200,
      contentHeight: 200
    };
  },
  watch: {
    width: {
      handler: function (val, oldVal) {
        console.log(val, oldVal)
      },
      deep: true
    }
  },
  mounted () {
    // 要素の幅を取得するメソッド
    this.onWindowSizeChanged()
    // ユーザーがウィンドウサイズを変更したら実行されるようにする
    window.addEventListener('resize', this.onWindowSizeChanged)
  },
  methods: {
    onWindowSizeChanged () {
      this.element = this.$refs.getParentWidth.$el
      this.appBarHeight = this.element.clientHeight;
      // console.log(window.innerHeight)
      this.contentHeight = window.innerHeight - this.appBarHeight
      console.log(this.contentHeight)
      //this.width = el.clientWidth
      // console.log(window.innerWidth, window.outerWidth, window.naturalWidth)
    }
  },
  // computed: {
  //   contentHeight: function () {
  //     // return window.innerHeight - this.appBarHeight
  //   }
  // },
}
</script>

<style scoped>

</style>