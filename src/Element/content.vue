<script>
export default {
  name: "conTent",
  methods: {
    open() {
      this.$alert('求求你别卷了，你已经很优秀了 ^_^', '了解详情', {
        confirmButtonText: '继续开卷',
      });
    }
  }
}
</script>

<template>
  <div class="middle jumbotron">
    <img src="../img/img-lab@2x.png">
    <div class="middle-content">
      <h2 style="font-weight: bold">高级Web编程实验室</h2>
      <p1 >每人拥有自己完全独立的编程实验室，内置所有基础软件及学习素材。打开浏览器，即刻开始编程！</p1>
      <button type="button" @click="open" class="btn btn-outline-secondary btn-block" data-toggle="modal" data-target="#exampleModal">了解详情</button>
    </div>
  </div>
</template>

<style scoped>

</style>