<template>
  <v-app>
    <v-main>
<!--      <HelloWorld />-->
<!--      <TestCom />-->
      <MainLayout></MainLayout>
<!--      <TestCom2></TestCom2>-->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TestCom from "./components/TestCom.vue"
import MainLayout from "./components/MainLayout.vue"
import TestCom2 from "./components/TestCom2.vue"

export default Vue.extend({
  name: "App",

  components: {
    // HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    TestCom,
    // TestCom2,
    MainLayout
  },

  data: () => ({
    //
  }),
});
</script>
