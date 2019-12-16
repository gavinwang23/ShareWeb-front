<template>
<el-container>
  <el-header>
    <myHead></myHead>
  </el-header>
  <el-main>
    <div class="article_main">
      <h1>{{title}}</h1>
      <div v-html="content">{{content}}</div>
    </div>
    <div class="comment_area">
      <h1>评论区</h1>
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
    data(){
      return{
        title: '我的文章',
        content: '<h3>很久很久以前</h3> <p>有个补碗匠叫赵光义。赵光义是补碗匠中的高手。</p> <img src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=ac04969241a98226accc2375ebebd264/cb8065380cd79123d01d8093af345982b3b78053.jpg"><p>这天，赵光义挑着工具担子，刚走进一条胡同，便被一个人拽进一处院子里。这个人叫王直，他...</p>',
      }
    },
    methods:{
        getTitle: function(){

        }
    }
  }
</script>