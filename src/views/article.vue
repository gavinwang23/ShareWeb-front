<template>
<el-container>
  <el-header>
    <myHead></myHead>
  </el-header>
  <el-main>
    <div class="article_main">
      <h1>{{title}}</h1>
<<<<<<< HEAD
      <div class="article_info">
        <div class="author_name">小明</div>
        <div class="abc">小小</div>
      </div>
=======
>>>>>>> ac5bc8825c23108e2a1878c26a9702981d964df4
      <div v-html="content">{{content}}</div>
    </div>
    <div class="comment_area">
      <h1>评论区</h1>
      <div class="input">
        <textarea></textarea>
        <button>提交评论</button>
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
      myHead,
    },
    created(){
      let userName="11111";
      let articleTitle = "123123"
      let params = {userName:userName,articleTitle:articleTitle};
      this.$axios
        .getWithURL('article/get',params)
        .then(response=>{
          this.content = response.data.list[0].articleContent;
          this.title = response.data.list[0].articleTitle;
        })
        .catch(error=>{
          console.error(error)
        })
    },
    data(){
      return{
        title: '文章题目',
        content: '<h3>很久很久以前</h3> <p>有个补碗匠叫赵光义。赵光义是补碗匠中的高手。</p> <img src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=ac04969241a98226accc2375ebebd264/cb8065380cd79123d01d8093af345982b3b78053.jpg"><p>这天，赵光义挑着工具担子，刚走进一条胡同，便被一个人拽进一处院子里。这个人叫王直，他...</p>',
      }
    },
    methods:{
        getTitle: function(){
          let userName="11111";
          let articleTitle="123123";
          let params = { userName: userName, articleTitle: articleTitle};
          this.$axios
            .getWithURLWithToken("article/get", params)
            .then(response => {
              var i;
              for (i = 0; i < response.data.corpus.length; i++) {
                console.log(response.data.corpus[i]);
              } 
            })
            .catch(error => {});
        },
    }
  }
</script>