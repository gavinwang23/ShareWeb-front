<template>
  <el-container>
    <!-- <el-header>
      <div class="imgBox"></div>
    </el-header>-->
    <el-main>
      <el-row type="flex" align="middle">
        <el-col :xs="0" :sm="6" :md="8" :lg="8" :xl="8">
          <div class="imgBoxContainer">
            <div class="imgBox"></div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <div class="content">
            <div class="swithBox">
              <div
                class="leftSwitch"
                v-bind:class="{active:switchProperty}"
                @click="loginFunction()"
              >登入</div>
              <div
                class="rightSwitch"
                v-bind:class="{active:!switchProperty}"
                @click="registerFunction()"
              >注册</div>
            </div>
            <div class="inputBox loginBox" v-if="switchProperty">
              <login></login>
            </div>
            <div class="inputBox loginBox" v-if="!switchProperty">
              <register></register>
            </div>
          </div>
        </el-col>
        <!-- <el-col :span="8"></el-col> -->
      </el-row>
    </el-main>
  </el-container>
</template>

<style src="../assets/css/Entry.scss" lang="scss" scoped></style>

<script>
import login from "./../components/login/login";
import register from "./../components/register";
// @ is an alias to /src
export default {
  components: {
    login,
    register
  },
  data() {
    return {
      switchProperty: true
    };
  },
  created() {
    if (this.$route.params.entryData != undefined) {
      this.switchProperty = this.$route.params.entryData;
    } else {
      this.switchProperty = true;
    }
  },
  methods: {
    loginFunction() {
      this.switchProperty = true;
    },
    registerFunction() {
      this.switchProperty = false;
    }
  }
};
</script>
