<template>
  <div style="overflow:auto;">
    <ul id="scroll">
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
            <div class="articleComment articleFooterLi">
              <i class="el-icon-chat-square"></i>
              <!-- <router-link to>{{}}</router-link> -->
            </div>
            <div class="articleUser">
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
      <div class="nullFooter"></div> -->
      <i class="el-icon-loading"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/components/layout.scss";
</style>

<script>
var time = 2;
export default {
  data() {
    return {
      loadingData: true,
      loadingAnimation: true,
      list: []
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  created() {
    this.requestArticleData();
  },
  methods: {
    handleScroll(e) {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = e.target.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight = e.target.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = e.target.scrollHeight;
      //滚动条到底部的条件
      this.loadingData = true;
      if (scrollTop + windowHeight == scrollHeight) {
        //写后台加载数据的函数
        this.loadingData = true;
        this.requestArticleData();
        this.mountedSetTimeout();
      }
    },
    //增加首页下拉滚动条增加文章的效果
    requestArticleData() {
      this.$axios
        .getWithURLWithToken("index/articles/get")
        .then(response => {
          let list = [];
          list = response.data.list;
          // console.log(list);
          // this.list = list;
          // this.loadingData = false;
          for (let i = 0; i < list.length; i++) {
            this.list.push(list[i]);
          }
        })
        .catch(error => {});
    },
    mountedSetTimeout() {
      var that = this;
      console.log(that)
      console.log("钩子函数运行");
      setTimeout(()=>{
        console.log("Hello");
        console,log(that);
        that.loadingAnimation = !that.loadingAnimation;
        setTimeout(this.mountedSetTimeout(), 100);
      }, 900);
    },
    changeLoading() {
      console.log("根据条件开始判断是否每隔1s添加/删除一次类");
      // this.loadingAnimation = !this.loadingAnimation;
      // setTimeout(this.mountedSetTimeout(),100);
    }
  }
};
</script>
