<script>




import Reg_form from "@/components/reg_form.vue";

export default {
  name: "reg-dev",
  components: {Reg_form},

  data() {
    return {
      centerDialogVisible: false,

    };
  },
  methods:{
    change(){
      this.centerDialogVisible = false
    }
  }


}
</script>

<template>
  <div>
    <!--    <el-button type="text" @click="centerDialogVisible = true>登录</el-button>-->
    <el-button type="primary" @click="centerDialogVisible = true">注册</el-button>
    <el-dialog
        title="注册"
        :visible.sync="centerDialogVisible"
        append-to-body="false"
        width="30%"
        center>
      <span><Reg_form @change="change"></Reg_form></span>

      <span slot="footer" class="dialog-footer">
<!--    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>-->

  </span>
    </el-dialog>
  </div>

</template>

<style scoped>

</style>