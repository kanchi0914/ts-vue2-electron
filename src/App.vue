<template>
  <v-app>
    <v-main>
      <v-content>
        <!--      <HelloWorld />-->
              <TestCom />
<!--              <TestCom3></TestCom3>-->
              <MainLayout></MainLayout>
        <TestCom2></TestCom2>
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

export default Vue.extend({
  /* eslint-disable vue/no-unused-components */
  name: "App",

  components: {
    // HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    TestCom,
    TestCom2,
    TestCom3,
    MainLayout
  },

  data: () => ({
    //
  }),
});
</script>
