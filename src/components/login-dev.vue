<script>


import Login_form from "@/components/login_form.vue";

export default {
  name: "login-dev",
  components: {Login_form},
  props:['see'],
  data() {
    return {
      centerDialogVisible: false,
    };
  },
  methods:{
    change(){
      this.centerDialogVisible = false
    },
    hidden() {
      this.$emit("hidden",false)
    }
  }


}
</script>

<template>
  <div>
<!--    <el-button type="text" @click="centerDialogVisible = true>登录</el-button>-->
    <el-button type="primary" @click="centerDialogVisible = true">登录</el-button>
  <el-dialog
      title="登录"
      :visible.sync="centerDialogVisible"
      append-to-body="false"
      width="30%"
      center>
    <span><Login_form @change="change" @hidden="hidden"></Login_form></span>

    <span slot="footer" class="dialog-footer">
<!--    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>-->

  </span>
  </el-dialog>
  </div>

</template>

<style scoped>

</style>