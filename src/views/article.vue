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
        title: '我的文章',
        content: '加载失败，请重新尝试',
      }
    },
    methods:{
        getTitle: function(){

        }
    }
  }
</script>