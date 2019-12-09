<template>
  <div style="overflow:auto;">
    <ul id="scroll">
      <li v-for="i in list" :key="i.title">
        <div class="articleTitleBox">
          <router-link to>
            <b>{{i.title}}</b>
          </router-link>
        </div>
        <div class="articleContainerBox">
          <img src="../assets/picture/pic.jpg" align="right" />
          <!-- </div> -->
          {{i.time}}
          <div class="layoutFooter">
            <div class="articleUp articleFooterLi">
              <i class="el-icon-caret-top"></i>
              <router-link to>111</router-link>
            </div>
            <div class="articleDown articleFooterLi">
              <i class="el-icon-caret-bottom"></i>
              <router-link to>222</router-link>
            </div>
            <div class="articleComment articleFooterLi">
              <i class="el-icon-chat-square"></i>
              <router-link to>123</router-link>
            </div>
            <div class="articleUser">
              <router-link to>11111</router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- 加载时候出现的 -->
    <div class="loading" v-if="loadingData">
      <div class="nullTitleBox"></div>
      <div class="nullContentBox1"></div>
      <div class="nullContentBox2"></div>
      <div class="nullFooter"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/components/layout.scss";
</style>

<script>
export default {
  data() {
    return {
      loadingData: false,
      list: [
        {
          title: "How to study Vue",
          time: "2016-04-10"
        },
        {
          title: "How to study Typescript",
          time: "2019-11-10"
        }
      ],
      list2: [
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
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
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
      if (scrollTop + windowHeight == scrollHeight) {
        //写后台加载数据的函数
        console.log(
          "距顶部 " +
            scrollTop +
            "可视区高度" +
            windowHeight +
            "滚动条总高度" +
            scrollHeight
        );
        //增加首页下拉滚动条增加文章的效果
        let params = { pageNo: 1, pageSize: 20 };

        this.$axios
          .getWithURLWithToken("index/articles/get", params)
          .then(response => {})
          .catch(error => {});
      }
    }
  }
};
</script>
