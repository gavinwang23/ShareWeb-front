<template>
  <div >
    <el-container v-if="allowPage" >
      <el-header style="background-color: white;">
        <div class="headerBox">
          <myHead></myHead>
        </div>
      </el-header>
      <el-container>
        <el-main>
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="18">
              <el-col :span="8">
                <div class="leftBox" :class="{gray:this.$store.state.changeDayNight}">
                  <div class="title">
                    <el-dropdown>
                      <el-button>
                        更多菜单
                        <i class="el-icon-arrow-down el-icon--right"></i>
                      </el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item>双皮奶</el-dropdown-item>
                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                    <div class="addFollow">
                      <i class="el-icon-user-solid"></i>
                      添加关注
                    </div>
                  </div>
                  <div class="content">
                    <ul>
                      <li
                        v-for="(item,index) in users"
                        :key="index"
                        :class="isActive == index?'active':'' "
                        @click="changeListState(index)"
                      >{{item.user}}</li>
                      <!-- <router-link to>
                      <li>用户b</li>
                      </router-link>-->
                    </ul>
                  </div>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="followContent" :class="{gray:this.$store.state.changeDayNight}">
                  <div class="headerBox" >
                    <div class="headerImage">
                      <img :src="123" height="50px;" />
                    </div>
                    <div class="headerInfo">
                      <div class="title"></div>
                      <div class="info"></div>
                    </div>
                  </div>
                  <layout :userArticle="true"></layout>
                </div>
              </el-col>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
    <div v-else>
      <loginMessage></loginMessage>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/followPage.scss";
</style>

<script>
import cookie from "js-cookie"
import myHead from "./../components/header/headerBackUp.vue";
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
      users: [{ id: 1, user: "用户1" }, { id: 2, user: "用户2" }],
      isActive: "",
      allowPage: false
    };
  },
  created() {
    if(cookie.get("token")){
      this.allowPage=true;
    }
  },
  methods: {
    changeListState(index) {
      return (this.isActive = index);
    }
  }
};
</script>