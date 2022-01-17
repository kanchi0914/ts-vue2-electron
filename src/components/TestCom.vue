<template>
  <div>
    <!--    <VueDraggableResizable style="width: 100px; height: 100px">aaaaaa</VueDraggableResizable>-->
    <!--    <div style="height: 300px; border: 1px solid blue;">-->
    <!--      &lt;!&ndash; add any elements you would like to drag & resize&ndash;&gt;-->
    <!--      <vue-draggable-resizable :parent="true" style="border: 1px solid black;">-->
    <!--        <img src="../assets/logo.png">-->
    <!--        <p>You can drag, you can resize, but you cannot move me outside the parent.</p>-->
    <!--      </vue-draggable-resizable>-->
    <!--    </div>-->
    <!--    <vue-draggable-resizable>aaaaa</vue-draggable-resizable>-->
    <!-- create a border to serve as a visual box -->


    <div>
      aaaa
      <button id="btn">クリックでテキスト挿入</button>
      <p id="hogehoge"></p>
    </div>
    <!--    <div id="textareaid1" style="width:300px;height:200px;">-->
    <!--      aasaaaaa js js js-->
    <!--      aaaaaa-->
    <!--      aaa-->
    <!--    </div>-->
    <!--    <div id="divid" style="border:1px solid #aaa; width:300px; height:100px;">-->
    <!--    </div>-->

<!--    <textarea id="textareaid1" style="width:300px;height:200px;">-->
<!--リサイズが可能です-->
<!--      usodesu-->
<!--      usodesu-->
<!--      usodesu-->
<!--      udo-->
<!--</textarea>-->
<!--    -->
<!--    <vue-resizable>-->
<!--      <div class="resizable-content"></div>-->
<!--    </vue-resizable>-->
  </div>
</template>

<script>
import * as fs from "fs"
import $ from 'jquery';

export default {
  name: "TestCom",
  mounted: function () {
    $('#btn').click(function () {
      $("#hogehoge").text("テキスト挿入");
    });
    $('#textareaid1').funcResizeBox({
      isWidthResize: true,
      isHeightResize: true,
      minHeight: 30,
      maxHeight: 100,
      minWidth: 50,
      maxWidth: 400
    })
    fs.readdir('/', (err, docs) => {
      console.log('dsadas')
      console.log(docs)
      console.log('dsadas')
    })
    // $('#divid').funcResizeBox({
    //   isWidthResize: true,
    //   isHeightResize:true,
    // });
    // console.log($('#divid').width())
  }
}

</script>

<style scoped>
.resizable-content {
  height: 100%;
  width: 100%;
  background-color: aqua;
}
</style>
