<template>
  <v-app>
    <v-main>
      <v-content>
        <!--      <HelloWorld />-->
<!--              <TestCom />-->
        <TestCom4></TestCom4>
<!--              <TestCom3></TestCom3>-->
<!--              <MainLayout></MainLayout>-->
<!--        <FileLoader></FileLoader>-->
<!--        <TestCom2></TestCom2>-->
      </v-content>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TestCom from "./components/TestCom.vue"
import MainLayout from "./components/MainLayout.vue"
import TestCom2 from "./components/TestCom2.vue"
import TestCom3 from "./components/TestCom3.vue"
import TestCom4 from './components/TestCom4.vue'
// import FileLoader from "./components/FileLoader.vue"

export default Vue.extend({
  /* eslint-disable vue/no-unused-components */
  name: "App",

  components: {
    // HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    TestCom,
    TestCom2,
    TestCom3,
    TestCom4,
    // FileLoader,
    MainLayout
  },

  data: () => ({
    //
  }),
});
</script>
