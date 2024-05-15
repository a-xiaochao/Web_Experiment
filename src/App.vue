<template>
  <div id="app">


    <top></top>
    <Content></Content>
    <ConTent2></ConTent2>
    <Course></Course>
    <Foot></Foot>
    <alert-dev></alert-dev>


  </div>
</template>

<script>
//这里的from路径根据自己的布局更改路径

import top from "@/Element/top.vue";
import Content from "@/Element/content.vue";
import Course from "@/Element/course.vue";
import Foot from "@/Element/foot.vue";
import ConTent2 from "@/Element/content2.vue";
import AlertDev from "@/components/alert.vue";

export default {
  name: 'App',

  data(){
    return{
      msg:"Login"
    }
  },
  components: {

    AlertDev,
    ConTent2,
    Foot,
    Course,
    Content,
    top
  }
}
</script>

<style scoped>
/*.title{
  text-align: center;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.btn {
  background-color: rgb(210,193,326);
  border-radius:28px;
  border:1px solid #ffffff;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:17px;
  padding:16px 31px;
  text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;
  margin: 10px 20px;
}
.btn:hover {
  background-color:rgb(180,193,237);
}
.btn:active {
  position:relative;
  top:1px;
}*/
</style>