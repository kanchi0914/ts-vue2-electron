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
    <div style="height: 300px; border: 1px solid blue;">
      <!-- add any elements you would like to drag & resize-->
      <vue-draggable-resizable :parent="true" style="border: 1px solid black;">
        <img src="../assets/logo.png">
        <p>You can drag, you can resize, but you cannot move me outside the parent.</p>
      </vue-draggable-resizable>
    </div>
  </div>
</template>

<script>
export default {
name: "TestCom"
}
</script>

<style scoped>

</style>