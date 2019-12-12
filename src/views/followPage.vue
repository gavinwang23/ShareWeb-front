<template>
  <el-container>
    <el-header style="background-color: white;">
      <div class="headerBox">
        <myHead></myHead>
      </div>
    </el-header>
    <el-container>
      <el-main>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="18">
            <el-col :span="2"></el-col>
            <el-col :span="6">
              <div class="leftBox">
                <div class="title">
                  <el-dropdown>
                    <el-button>
                      我的关注
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
                </div>
                <div class="content">
                  <ul>
                    <li>用户a</li>
                    <li>用户b</li>
                  </ul>
                </div>
              </div>
            </el-col>
            <el-col :span="16">222</el-col>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../assets/css/followPage.scss";
</style>

<script>
import myHead from "./../components/header/headerBackUp.vue";
export default {
  components: {
    myHead
  }
};
</script>