<template>
  <v-app>
    <v-main>
<!--      <HelloWorld />-->
      <TestCom />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TestCom from "./components/TestCom.vue"

export default Vue.extend({
  name: "App",

  components: {
    // HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    TestCom,
  },

  data: () => ({
    //
  }),
});
</script>
