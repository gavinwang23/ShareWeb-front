<template>
  <el-container>
    <el-header>
      <myHead></myHead>
    </el-header>
    <el-main>
      <div class="article_main">
        <h1>{{ title }}</h1>
        <div v-html="content"></div>
        <el-button class="articlebutton"><img src="../assets/icon/good.png" style="height:35%;width:35%">赞同</el-button>
        <el-button class="bedbutton" style="padding-top:15px"><img src="../assets/icon/bed.png" style="height:130%;width:50%;margin-top:-15px;"></el-button>
        <el-button class="articlebutton" @click="translate=true,hide=true"><img src="../assets/icon/comment.png" style="height:40%;width:40%;">评论</el-button>
        <el-button class="articlebutton"><img src="../assets/icon/share.png" style="height:35%;width:35%;">分享</el-button>
        <el-button class="articlebutton" ><img src="../assets/icon/like.png" style="height:35%;width:35%">喜欢</el-button>
        <el-popover width="5vw" trigger="click">
          <div>
            <el-button class="articlebutton">不感兴趣</el-button>
            <el-button class="articlebutton">举报</el-button>
          </div>
          <el-button slot="reference" class="morebutton"><img src="../assets/icon/more.png" style="height:40%;width:40%"></el-button>
        </el-popover>
        <el-button v-show="hide" @click="translate=false,hide=false" class="hidebutton">收起评论</el-button>
      </div>
      <div v-show="translate" class="comment_area">
        <h1>评论区</h1>
          <img src="../assets/icon/notcomment.png" style="height:12vh;width:6vw;margin-left:25vw"><div class="notcomment">暂无评论</div>
          <!-- <div class="commentarea"> 
          <div class="commentbox">
          <div class="username">11111:</div>
          <div class="commentcontent">有个补碗匠叫赵光义。赵光义是补碗匠中的高手这天，赵光义挑着工具担子，刚走进一条胡同，便被一个人拽进一处院子里。这个人叫王直，他</div>
          <el-button class="commentgood"><img src="../assets/icon/good.png" style="height:60%;width:40%">赞</el-button>
          </div>
          </div> -->
        <div class="input">
          <!-- <textarea class="textareabox" @focus="submissionbutton=true" @blur="submissionbutton=fasle"></textarea> -->
          <wangEditor commentvalue="写评论" height="20vh" message="发布" editor="comment" class="wangEditorbox" @focus="submissionbutton=true" @blur="submissionbutton=fasle"></wangEditor>
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
import wangEditor from "../components/wangEditor.vue";
export default {
  components: {
    myHead,
    wangEditor
  },
  created() {
    let userName = this.$route.params.userName;
    let articleTitle = this.$route.params.article;
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
