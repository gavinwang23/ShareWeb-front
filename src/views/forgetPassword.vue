<template>
  <el-main>
    <el-row>
      <el-col :span="24">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8">
        <div class="inputBox" v-if="active==0">
          <el-input v-model="userName" placeholder="用户名"></el-input>
          <div class="buttonBox">
            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-main>
</template>

<style lang="scss" scoped>
@import "../assets/css/forgetPassword.scss";
</style>

<script>
export default {
  data() {
    return {
      userName: "",
      active: 0
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>