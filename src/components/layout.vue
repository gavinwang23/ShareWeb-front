<template>
  <div style="overflow:auto;">
    <ul>
      <li v-for="i in list" :key="i.title">
        <div class="articleTitleBox">
          <router-link to>
            <b>{{i.articleTitle}}</b>
          </router-link>
        </div>
        <div class="articleContainerBox">
          <img src="../assets/picture/pic.jpg" align="right" />
          <!-- </div> -->
          {{i.articleContent}}
          <div class="layoutFooter">
            <div class="articleUp articleFooterLi">
              <i class="el-icon-caret-top"></i>
              <router-link to>{{i.articleAdmire}}</router-link>
            </div>
            <div class="articleDown articleFooterLi">
              <i class="el-icon-caret-bottom"></i>
              <router-link to>{{i.articleOppose}}</router-link>
            </div>
            <!-- <div class="articleComment articleFooterLi">
              <i class="el-icon-chat-square"></i> -->
              <!-- <router-link to>{{}}</router-link> -->
            <!-- </div> -->
            <div class="articleUser articleFooterLi">
              <router-link to>{{i.userName}}</router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- 加载时候出现的 -->
    <div class="loading" v-if="loadingData">
      <!-- setTimeout使用失败 -->
      <!-- <div class="nullTitleBox"></div>
      <div class="nullContentBox1" :class="{nullContentBox1Transition:loadingAnimation}"></div>
      <div class="nullContentBox2" :class="{nullContentBox2Transition:loadingAnimation}"></div>
      <div class="nullFooter"></div>-->
      <i class="el-icon-loading"></i>
    </div>
    <div class="loading" v-if="loadingError">加载失败，请重新加载</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/components/layout.scss";
</style>

<script>
var time = 0;
export default {
  data() {
    return {
      loadingData: true,
      loadingAnimation: true,
      loadingError: false,
      list: []
    };
  },
  created() {
    this.requestArticleData();
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    //有待梳理
    handleScroll() {
      //总高度
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      this.loadingData = true;
      this.loadingError = false;
      if (scrollTop + windowHeight >= scrollHeight-199) {
        //写后台加载数据的函数
        console.log(
          "距顶部" +
            scrollTop +
            "可视区高度" +
            windowHeight +
            "滚动条总高度" +
            scrollHeight
        );
        this.requestArticleData();
      }
    },
    //增加首页下拉滚动条增加文章的效果
    requestArticleData() {
      console.log("发送请求");
      time++;
      let pageNo = time;
      let pageSize = 10;
      let param = { pageNo: pageNo, pageSize: pageSize };
      this.$axios
        .getWithURL("index/articles/get", param)
        .then(response => {
          let list = [];
          list = response.data.list;
          this.loadingData = false;
          for (let i = 0; i < list.length; i++) {
            this.list.push(list[i]);
          }
        })
        .catch(error => {
          this.loadingData = false;
          this.loadingError = true;
        });
    }
  }
};
</script>
