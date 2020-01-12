<template>
  <div>
    <div v-if="allowPage">
      <div class="headerBox">
        <myHead></myHead>
      </div>
      <div class="mainBox">
        <el-main>
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="12">
              <div class="mainHeaderBox">
                <img src="../assets/picture/collection.png" width="100%">
              </div>
              <div class="mainContentBox">
                <layout :collectionLike="true"></layout>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </div>
    </div>
    <div v-else>
      <loginMessage></loginMessage>
    </div>
  </div>
</template>

<style src="./../assets/css/collectionAndLike.scss" lang="scss" scoped>
</style>

<script>
import cookie from "js-cookie";
import myHead from "./../components/header/header.vue";
import layout from "./../components/layout.vue";
import loginMessage from "./../components/login/loginMessage";
export default {
  components: {
    myHead,
    layout,
    loginMessage
  },
  data() {
    return {
      allowPage: false
    };
  },
  created() {
    if (cookie.get("token")) {
      this.allowPage = true;
    }
  }
};
</script>