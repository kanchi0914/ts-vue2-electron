<template>
  <div id="editor" :style="{ width: width ? px(width) : '100%' }"></div>
</template>

<script>
import ace from "brace";
import emmet from "emmet";

window.emmet = emmet;

export default {
  name: "editor",
  props: {
    code: String,
    value: String,
    lang: String,
    theme: String,
    height: {
      type: String,
      default: "100%"
    },
    width: {
      type: String,
      default: "100%"
    },
    readOnly: Boolean,
    contentSize: Number
  },
  data() {
    return {
      editor: null,
      contentBackup: "",
      rowNum: 1
    };
  },
  methods: {
    px(n) {
      if (/^\d*$/.test(n)) {
        return `${n}px`;
      }
      return n;
    },
    save() {
      console.log('osarta')
    }
  },
  watch: {
    value(val) {
      if (this.contentBackup !== val) this.editor.setValue(val, 1);
    },
    code(val) {
      if (this.contentBackup !== val) this.editor.setValue(val, 1);
    },
    lang(val) {
      this.editor.getSession().setMode(`ace/mode/${val}`);
    },
    contentSize(val){
      let rowNum = Math.round(val / this.editor.renderer.lineHeight)
      this.editor.setOption("minLines", rowNum);
      this.editor.resize();
    }
  },
  mounted() {
    const vm = this;
    const lang = this.lang || "text";
    const theme = this.theme || "monokai";

    require("brace/ext/emmet");

    const editor = (vm.editor = ace.edit(this.$el));

    this.$emit("init", editor);
    editor.$blockScrolling = Infinity;
    editor.setOption("enableEmmet", true);
    editor.getSession().setUseWorker(false);
    editor.setOption("maxLines", 100);
    editor.getSession().setMode(`ace/mode/${lang}`);
    editor.setTheme(`ace/theme/${theme}`);
    editor.setShowPrintMargin(false);
    // editor.setValue('dsdadasdasdasda', 1);
    if (!this.readOnly) {
      // editor.setValue('unkodaisuki')
      // editor.setOption("minLines", 1);

      // 設定されてない
      editor.setValue(this.value, 1);
    } else {
      // editor.setValue(this.code, 1);
    }
    // editor.setReadOnly(this.readOnly);
    // editor.setReadOnly(true)
    // editor.on("change", () => {
    //   const content = editor.getValue();
    //   vm.$emit("input", content);
    //   vm.contentBackup = content;
    // });
  }
};
</script>

<style src="./Editor.scss" lang="scss"></style>
