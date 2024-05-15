<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">登录</div>
      <div class="form-wrapper">
        <input type="text" v-model="username" name="username" placeholder="姓名" class="input-item">
        <input type="password" v-model="password" name="password" placeholder="密码" class="input-item">
        <div class="btn" @click="Login">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name:"Index_Login",
  data (){
    return {
      username:'',
      password:''
    }
  },

  methods:{
    Login(){
        axios.get('http://localhost:3000/users',{
        username: this.username,
        password: this.password
      }).then((r) => {
            if(r.data[0].username === this.username && r.data[0].password === this.password){
              alert("登录成功")
              setTimeout(() => {
                window.history.back(-1);
              }, 500);
            }else{
              alert ("用户名或密码错误")
              this.username=''
              this.password=''
            }
          })
          .catch(error =>{
            console.log(error)
          })
    }
  }
}
</script>





<style scoped>

html {
  height: 100%;
}
body {
  height: 100%;
}
.container {
  /* margin-top: 5%; */
  height: 980px;
  width: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-wrapper {
  background-color: #fff;
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}
.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}
.input-item:placeholder {
  text-transform: uppercase;
}
.btn {
  text-align: center;
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  margin-top: 40px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
}
.msg {
  text-align: center;
  line-height: 88px;
}
a {
  text-decoration-line: none;
  color: #abc1ee;
}

</style>