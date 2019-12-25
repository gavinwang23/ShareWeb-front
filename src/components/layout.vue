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
            <i class="el-icon-chat-square"></i>-->
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
import { request } from "http";
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
  props: {
    indexArticle: Boolean,
    userArticle: Boolean,
    collectionLike: Boolean
  },
  created() {
    //判断哪个页面调用了layout
    //然后为window添加滚动事件
    this.determinePage();
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    //判断后调用方法发送请求
    determinePage() {
      if (this.indexArticle == true) {
        console.log(1);
        this.requestArticle();
      } else if (this.userArticle == true) {
        console.log(2);
        this.requestFollowUser();
      } else if (this.collectionLike == true) {
        console.log(3);
        this.requestCollectionLike();
      }
    },
    //有待梳理,
    //增加首页下拉滚动条增加文章的效果
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
      if (scrollTop + windowHeight >= scrollHeight - 199) {
        //写后台加载数据的函数
        console.log(
          "距顶部" +
            scrollTop +
            "可视区高度" +
            windowHeight +
            "滚动条总高度" +
            scrollHeight
        );
        this.determinePage();
      }
    },
    //请求index文章的代码
    requestArticle() {
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
    },
    //请求关注列表的代码
    requestFollowUser() {
      console.log("请求user");
      let userName = "11111";
      let param ={ userName:userName};
      this.$axios
      .getWithURLWithToken("follower_articles/get",param)
      .then(response =>{
        let list =[];
        list = response.data.list;
        this.loadingData =false;
        for(let i=0;i<list.length;i++){
          this.list.push(list[i]);
        }
      })
      .catch(error =>{
        this.loadingData =false;
        this.loadingError =true;
      })
    },
    //请求收藏和喜欢的代码
    requestCollectionLike() {
      console.log("请求collectionAndLike");
    }
  }
};
</script>
