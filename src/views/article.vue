<template>
<el-container>
  <el-header>
    <myHead></myHead>
  </el-header>
  <el-main>
    <div class="article_main">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
    </div>
    <div>
      <h1>{{title}}</h1>
    </div>
    <div>
      <p>{{content}}</p>
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
        content: '很久很久以前，有个补碗匠叫赵光义。赵光义是补碗匠中的高手。 <img src="/Users/wangjunwei/Desktop/front/share_web_front/src/assets/picture/logo2.png">这天，赵光义挑着工具担子，刚走进一条胡同，便被一个人拽进一处院子里。这个人叫王直，他...',
      }
    },
    methods:{
        getTitle: function(){

        }
    }
  }
</script>