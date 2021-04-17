<template>
  <div>
<!--        <div style="height: 300px; border: 1px solid blue;">-->
<!--          &lt;!&ndash; add any elements you would like to drag & resize&ndash;&gt;-->
<!--          <vue-draggable-resizable :parent="true" style="border: 1px solid black;">-->
<!--            <img src="../assets/logo.png">-->
<!--            <p>You can drag, you can resize, but you cannot move me outside the parent.</p>-->
<!--          </vue-draggable-resizable>-->
<!--        </div>-->
    <vue-resizable>
      <div>vcccc</div>
    </vue-resizable>
    <vue-resizable active=[r]>
      <div class="resizable-content"></div>
    </vue-resizable>
  </div>
</template>

<script>
export default {
name: "TestCom2"
}
</script>

<style scoped>
.resizable-content {
  height: 100%;
  width: 100%;
  background-color: aqua;
}
</style>