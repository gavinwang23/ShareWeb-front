<template>
  <div class="container">
    <el-dialog title="请重新登入" :visible.sync="dialogFormVisible">
      <div class="loginBox">
        <login></login>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/login/loginMessage.scss";
</style>

<script>
import login from "./login.vue";
export default {
  components: {
    login
  },
  data() {
    return {
      dialogFormVisible: true,
      form: {
        userName: "",
        password: ""
      },
      formLabelWidth: "100px"
    };
  }
};
</script>