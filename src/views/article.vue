<template>
  <el-container>
    <el-header>
      <myHead></myHead>
    </el-header>
    <el-main>
      <div class="article_main">
        <h1>{{ title }}</h1>
        <div v-html="content"></div>
        <el-button class="buttonstyle">赞</el-button>
        <el-button class="buttonstyle">踩</el-button>
        <el-button class="buttonstyle" @click="translate=true,hide=true">评论</el-button>
        <el-button class="buttonstyle">分享</el-button>
        <el-button class="buttonstyle">感兴趣</el-button>
        <el-popover width="5vw" trigger="click">
          <div>
            <el-button>不感兴趣</el-button>
            <el-button>举报</el-button>
          </div>
          <el-button class="buttonstyle" slot="reference">更多</el-button>
        </el-popover>
        <el-button v-show="hide" @click="translate=false,hide=false" class="hidebutton">收起评论</el-button>
      </div>
      <div v-show="translate" class="comment_area">
        <h1>评论区</h1>
        <div class="input">
          <textarea class="textareabox" @focus="submissionbutton=true" @blur="submissionbutton=fasle"></textarea>
          <button class="submissionbutton" v-show="submissionbutton">发布</button>
        </div>
      </div>
    </el-main>
    <el-footer>版权所有</el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../assets/css/manager.scss";
@import "../assets/css/article.scss";
</style>

<script>
import myHead from "./../components/header/header.vue";
export default {
  components: {
    myHead
  },
  created() {
    let userName = this.$route.params.userName;
    let articleTitle = this.$route.params.articleTitle;
    let params = { userName: userName, articleTitle: articleTitle };
    this.$axios
      .getWithURLWithToken("article/get", params)
      .then(response => {
        console.log(response)
        this.title=response.data.list[0].articleTitle;
        this.content=response.data.list[0].articleContent;
      })
      .catch(error => {});
  },
  data() {
    return {
      title: "文章题目",
      content:
        '<h3>很久很久以前</h3> <p>有个补碗匠叫赵光义。赵光义是补碗匠中的高手。</p> <img src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=ac04969241a98226accc2375ebebd264/cb8065380cd79123d01d8093af345982b3b78053.jpg"><p>这天，赵光义挑着工具担子，刚走进一条胡同，便被一个人拽进一处院子里。这个人叫王直，他...</p>',
      submissionbutton:false, 
      translate:false,
      hide:false,   
    };
  },
  methods: {
    // getTitle: function(){
    //   let userName="11111";
    //   let articleTitle="123123";
    //   let params = { userName: userName, articleTitle: articleTitle};
    //   this.$axios
    //     .getWithURLWithToken("article/get", params)
    //     .then(response => {
    //       var i;
    //       for (i = 0; i < response.data.corpus.length; i++) {
    //         console.log(response.data.corpus[i]);
    //       }
    //     })
    //     .catch(error => {});
    // },
  }
};
</script>
