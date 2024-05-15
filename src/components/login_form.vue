<script>
import axios from "axios";

export default {
  name: "login_form",
  props:['title','see'],

  data() {
  var validatePass = (rule, value, callback) => {
  if (value === '') {
  callback(new Error('请输入用户名'));
} else {
  if (this.ruleForm.checkPass !== '') {
  this.$refs.ruleForm.validateField('checkPass');
}
  callback();
}
};
  var validatePass2 = (rule, value, callback) => {
  if (value === '') {
  callback(new Error('请输入密码'));
}else {
  callback();
}
};
  return {
  ruleForm: {
  pass: '',
  checkPass: '',
},
  rules: {
  pass: [
{validator: validatePass, trigger: 'blur'}
  ],
  checkPass: [
{validator: validatePass2, trigger: 'blur'}
  ],
}
};
},

  methods: {
    submitForm(formName) {
     /* let data = {
        username: this.ruleForm.pass,
        password: this.ruleForm.checkPass
      }
      this.$axios({             // 调用axios方法发动http请求
        method: 'post',      // 访问方式 post
        url: '/login',     // 访问路径
        data              // 访问数据
      }).then(() => {
        this.formData = {}     // 访问结束后清空formData中的数据
        this.resetForm('form')    // 清空表单数据
      })*/


  this.$refs[formName].validate((valid) => {
    if(!valid){
    return
  }else {
      axios.post('/login', {
        username: this.ruleForm.pass,
        password: this.ruleForm.checkPass
      }).then((e) => {
        if (e.data.code === 1 ) {
          alert("登录成功")
          this.changefn()
          this.resetForm('ruleForm')
          this.hidden()
        } else {
          alert("用户名或密码错误")
          this.resetForm('ruleForm')
        }
      })
          .catch(error => {
            console.log(error)
          })
    }

});
},
  resetForm(formName) {
  this.$refs[formName].resetFields();
} ,
  changefn(){
    this.$emit("change",false)
  },
  hidden(){
    this.$emit("hidden",false)
  }
}
}
</script>



<template>
  <el-form :model="ruleForm"  status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="pass">
      <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>


    <el-form-item >
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      <el-button @click="resetForm('ruleForm');changefn()">取消</el-button>

    </el-form-item>
  </el-form>

</template>

<style scoped>

</style>