<template>
  <div class="inputBox">
    <div class="iconBox" v-if="notallowUsername">
      <i class="el-icon-error"></i>
    </div>
    <div class="iconBox" v-if="allowUsername">
      <i class="el-icon-success"></i>
    </div>
    <el-input v-model="username" placeholder="用户名" @blur="loseFocus()"></el-input>
    <el-input v-model="password" placeholder="密码" show-password></el-input>
    <div class="verifyCodeBox" :class="{'banButtonAndVerify':banButtonAndVerify}">
      <div class="verifyCodeInputBox">
        <el-input v-model="verifyCode" placeholder="验证码"></el-input>
      </div>
      <div class="verifyCodeImgBox">
        <img :src="this.verifyPic" @click="applyVerify"  width="100%" />
      </div>
    </div>
    <div class="buttonBox" :class="{'banButtonAndVerify':banButtonAndVerify}">
      <el-button round @click="register()">注册</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/components/register.scss";
</style>

<script>
import { applyVerify } from "../js/components/register";
import QS from "qs";
var time = 3;
export default {
  data() {
    return {
      username: "",
      password: "",
      verifyCode: "",
      verifyPic: "http://192.168.1.124:8888/api/verify_code",
      determineVerify: true,
      allowUsername: false,
      notallowUsername: false,
      banButtonAndVerify: false
    };
  },
  created() {
    this.applyVerify();
  },
  mounted() {
    this.applyVerify();
  },
  methods: {
    //刷新验证码
    applyVerify() {
      this.verifyPic = "http://localhost:8888/api/verify_code?" + Math.random();
      if (applyVerify() == false) {
        this.banButtonAndVerify = true;
        this.$message({
          showClose: true,
          message: "刷新验证码次数过多",
          type: "warning",
          duration: 3000
        });
        this.reverseTimeRegister();
      }
    },
    //倒计时
    reverseTimeRegister() {
      window.console.log(time);
      var y = time--;
      if (y > 0) {
        setTimeout(this.reverseTimeRegister, 1000);
      } else {
        time = 3;
        this.banButtonAndVerify = false;
      }
    },
    //判断用户名是否重复
    loseFocus() {
      var username = this.username;
      if (this.username != "") {
        this.$axios
          .getWithURL("is_username_duplicated/" + username)
          .then(response => {
            if (response.data == true) {
              // console.log(response);
              //如果返回值是true的话则用户名不能通过
              this.notallowUsername = true;
              this.allowUsername = false;
            } else {
              //如果返回值不是true的话则用户名可以通过
              this.notallowUsername = false;
              this.allowUsername = true;
            }
          })
          .catch(function(error) {
            window.console.error(error);
          });
      } else {
        this.$message({
          showClose: true,
          message: "请输入用户名",
          type: "warning",
          duration: 3000
        });
      }
    },
    //用户注册
    register() {
      var username = this.username;
      var password = this.password;
      // var verifyCode = this.verifyCode;
      var Parameter = {
        username: username,
        password: password //, verifyCode: verifyCode
      };
      var qsParameter = QS.stringify(Parameter);
      this.$axios
        .postWithURL("sign_up", qsParameter)
        .then(function(response) {
          if (response.data == 200) {
            this.action();
          }
        })
        .catch(function(error) {
          window.console.error(error);
        });
    },
    //注册成功的跳转
    action() {
      this.$message({
        showClose: true,
        message: "注册成功,将在3秒后跳转",
        type: "success",
        duration: 5000
      });
      this.reverseTimeAction();
    },
    //注册成功跳转倒计时
    reverseTimeAction() {
      window.console.log(time);
      var y = time--;
      if (y > 0) {
        setTimeout(this.reverseTime, 1000);
      } else {
        this.$router.replace({ path: "/" });
      }
    }
  }
};
</script>