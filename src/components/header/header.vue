<template>
  <div class="myhead">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <!-- 下面注释标签中的内容不知道如何使用故先备注 -->
      <!-- @select="handleSelect" -->
      <router-link to="/" class="navElement imgBox">
        <img src="../../assets/picture/logo.png" height="40px" />
      </router-link>
      <router-link to="/follow_page" class="navElement">
        <el-menu-item>关注</el-menu-item>
      </router-link>
      <router-link to="#" class="navElement">
        <el-menu-item index="2">下载app</el-menu-item>
      </router-link>
      <el-menu-item>
        <i class="el-icon-zoom-in navIconPosition"></i>
        <el-input v-model="select" placeholder="搜索" style="width:70%"></el-input>
      </el-menu-item>
      <router-link to="/writing" class="navNone">
        <el-menu-item style="float:right">写文章</el-menu-item>
      </router-link>
      <div v-if="!userState">
        <router-link :to="{name:'entry', params: {entryData:false}}">
          <el-menu-item style="float:right">注册</el-menu-item>
        </router-link>
        <router-link :to="{name:'entry', params: {entryData:true}}">
          <el-menu-item style="float:right">登录</el-menu-item>
        </router-link>
      </div>
      <!-- 用户头像 -->
      <div v-if="userState" class="userHead">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar :src="this.userHead"></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="manager">个人中心</el-dropdown-item>
            <el-dropdown-item command="collection_like">收藏和喜欢</el-dropdown-item>
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>钱包</el-dropdown-item>
            <el-dropdown-item>帮助与反馈</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-menu-item style="float:right">
        <el-dropdown>
          <span class="el-dropdown-link">
            Aa
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-switch
                v-model="value1"
                active-text="开灯"
                inactive-text="关灯"
                active-color="#6dacf4"
                inactive-color="#eee"
              ></el-switch>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-switch
                v-model="value2"
                active-text="简体"
                inactive-text="繁体"
                active-color="#6dacf4"
                inactive-color="#eee"
              ></el-switch>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/header/header.scss";
</style>

<script>
import Cookies from "js-cookie";
export default {
  data: function() {
    return {
      activeIndex: "1",
      value1: true,
      value2: true,
      select: "",
      userHead:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      userState: false
    };
  },
  created() {
    if (Cookies.get("token")) {
      this.userState = true;
    }
  },
  methods: {
    logout() {
      // Cookies.remove("userName");
      Cookies.remove("token");
    },
    handleCommand(userPointe) {
      window.console.log(userPointe);
      switch (userPointe) {
        case "logout":
          this.logout();
          location.reload();
          break;
        case "manager":
          this.$router.push({ name: "manager" });
          break;
        case "collection_like":
          this.$router.push({ name: "collection_like" });
          break;
      }
    }
  }
};
</script>