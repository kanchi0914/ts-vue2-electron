declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
import jQuery from 'jquery'

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
      jquery:jQuery;
      $: jQuery;
    }
  }
}

declare module 'vue-draggable-resizable'
declare module 'vue-resizable'