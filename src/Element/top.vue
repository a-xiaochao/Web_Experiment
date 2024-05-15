<script>
/*import loginDev from "@/components/login-dev.vue";*/
import LoginDev from "@/components/login-dev.vue";
import RegDev from "@/components/reg_dev.vue";
export default {
  name: "navTop",
  components: {RegDev, LoginDev},
    data(){
    return{
        see:true
    }
    },

    methods: {
      open() {
        this.$alert('求求你别卷了，你已经很优秀了 ^_^', '马上学习', {
          confirmButtonText: '继续开卷',
        });
      },
      hidden(){
        this.see = false
      }
    },
}
</script>

<template>

  <nav class="header">


    <div class="logo">
      <a href="#"><img src="../img/logo-white.svg"></a>
    </div>
    <div class="items">
      <ul class="nav justify-content-end" v-if="see" >
        <li class="nav-item">
<!--          <a class="nav-link active" type="primary" href="http://localhost:8080/" target="_parent">登录</a>-->
<!--         <router-link to="login" > <el-button type="primary" >登录</el-button> </router-link>-->
                <login-dev @hidden="hidden"></login-dev>
        </li>
        <li class="nav-item">
<!--          <a class="nav-link" target="_blank" href="http://localhost:8080/">注册</a>-->
                <reg-dev></reg-dev>
        </li>

      </ul> <ul class="nav justify-content-end" v-else >
        <li class="nav-item quit">
<!--          <a class="nav-link active" type="primary" href="http://localhost:8080/" target="_parent">登录</a>-->
<!--         <router-link to="login" > <el-button type="primary" >登录</el-button> </router-link>-->
          <el-button type="primary" @click="see = true">退出</el-button>

        </li>
      </ul>

    </div>
    <div class="text1">云端编程，浏览器里边学边练</div>
    <div class="text1 text2">软件定义一切，网络连接时空，学习软件技术，创造未来世界。</div>
    <button type="button" @click="open"  class="btn btn-primary link" data-toggle="modal" data-target="#exampleModal">马上学习</button>
  </nav>
</template>

<style scoped>
.quit{
  padding-left: 40px;
}
</style>