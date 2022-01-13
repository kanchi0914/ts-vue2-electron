<template>
  <div>
    <v-container>
      <v-row>
        <v-col style="background-color: #00b0ff;" cols="8">
          <Editor></Editor>
        </v-col>
        <v-col cols="4">
          <v-btn @click="onClick"></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Editor from "@/components/editor/Editor";

export default {
  name: "TopEditor",
  // eslint-disable-next-line vue/no-unused-components
  components: {Editor},
  mounted() {
     //this.$refs.editor.$emit('save')
  },
  methods: {
    onClick(){
      console.log('')
      // console.log(this.$refs.editor.contentBackup)
      // this.$refs.editor.save()
    }
  }
  // components: {Editor}
}
</script>

<style scoped>

</style>
