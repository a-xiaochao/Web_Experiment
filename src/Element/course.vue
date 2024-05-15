<script>
export default {
  name: "course-dev",

  methods: {
    open(e) {
      e.preventDefault()
      this.$alert('求求你别卷了，你已经很优秀了 ^_^', '马上学习', {
        confirmButtonText: '继续开卷',
      });
    }
  }
}
</script>

<template>
  <div class="course">
    <h2 style="font-weight: bold">课程特色</h2>
    <hr class="hr" style="border:0;background-color:#e1e1e1;height:1px;">
    <br>
    <article>
      <div><img src="../img/img.png"></div>
      <h3>丰富的教学服务</h3>
      <p>特色教学服务功能，各种配套教学服务，在线学习从未如此轻松。</p >
      <a href=" "  @click="open"   target="_blank" data-toggle="modal" data-target="#exampleModal">马上学习 ></a >
    </article>
    <article>
      <div><img src="../img/img_1.png"></div>
      <h3>多元的学习方式</h3>
      <p>知识提炼、答疑解惑、实时互动、开发有特色的教学服务方式。</p >
      <a href="https://computer.hnust.edu.cn/"  @click="open" target="_blank" data-toggle="modal" data-target="#exampleModal">马上学习 ></a >
    </article>
    <article>
      <div><img src="../img/img_2.png"></div>
      <h3>高品质的学习体验</h3>
      <p>多屏合一，随时学习，随时在线，学习记录一目了然，知识充电不再受限。</p >
      <a href="" @click="open"  target="_blank" data-toggle="modal" data-target="#exampleModal">马上学习 ></a>

    </article>
  </div>
</template>

<style scoped>

</style>