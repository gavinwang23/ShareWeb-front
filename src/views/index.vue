<template >
  <el-container>
    <el-header style="background-color: white;">
      <div class="headerBox">
        <!-- 使用了动画效果的header -->
        <!-- <transition name="slide-fade">
          <div class="fixed" v-if="show" key="myHeadNav">
            <myHeadNav></myHeadNav>
          </div>
          <div class="fixed" v-if="!show" key="myHead">
            <myHead></myHead>
          </div>
        </transition> -->
            <myHead></myHead>
      </div>
    </el-header>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="1"><br/></el-col>
          <!-- 开始中间的正文内容 -->
          <el-col :span="22" class="mainBox">
            <div class="rotationChartBox">
              <rotationChart></rotationChart>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="layoutBox">
              <layout></layout>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../assets/css/index.scss";
// @import url("../assets/css/index.scss");
</style>
<style scoped>
/* @import url("../assets/css/index.scss"); */
</style>

<script>
// import Cookies from "js-cookie";

// import myHeadNav from "./../components/header/header.vue";
// import myHead from "./../components/header/headerNav.vue";
import myHead from "./../components/header/headerBackUp.vue";
import rotationChart from "./../components/rotationChart.vue";
import layout from "./../components/layout.vue";
export default {
  components: {
    myHead,
    // myHeadNav,
    rotationChart,
    layout
  },
  created() {},
  data() {
    return {
      show: false,
      list: [
        {
          title: "How to study Vue",
          time: "2016-04-10"
        },
        {
          title: "How to study Typescript",
          time: "2019-11-10"
        }
      ]
    };
  },
  methods: {},
  //负责调整header状态
  //computed和watch中的函数名必须相同，前者返回的值会作为参数传递到后者的对应方法中。
  //关于动画效果
  computed: {
    headerChange() {
      return this.$store.state.headerState;
    }
  },
  watch: {
    headerChange(val) {
      this.show = val;
    }
  }
};
</script>