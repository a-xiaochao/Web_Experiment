<script>
export default {
  name: "conTent2",
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
  <div class="footer jumbotron">
    <img src="../img/img-media@2x.png" alt="双屏学习" class="screens-image">
    <div class="footer-content">
      <h2 style="font-weight: bold">双屏学习</h2>
      <p1>双屏学习，小屏视频互动，大屏实际操作，学习无障碍。打开浏览器，即刻开始编程！</p1 >
      <button type="button" @click="open" class="btn btn-outline-light btn-block" data-toggle="modal" data-target="#exampleModal">了解详情</button>
    </div>
  </div>
</template>

<style scoped>

</style>