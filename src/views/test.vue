<template>
  <div class="container">
    <el-button round @click="test()"></el-button>
    <el-button round @click="testAdd()"></el-button>
    <el-button round @click="testfollowArticle()"></el-button>
  </div>
</template>


<style src="../assets/css/test.scss" lang="scss">
</style>
<style src="../assets/css/components/layout.scss" lang="scss" scoped>
</style>

<script>
/* 
  通过用户名或者文章列表或文集列表使用的axios例子
  axios发送get请求时不需要序列化，直接发送JSON对象即可
 */
import QS from "qs";
export default {
  data() {
    return {
      loadingData: true,
      count: [
        { num: 1, content: "这是第一个内容" },
        { num: 2, content: "这是第二个内容" },
        { num: 3, content: "这是第三个内容" }
      ]
    };
  },
  methods: {
    test() {
      // let userName = "11111";
      // let params = { userName: userName };
      // this.$axios
      //   .getWithURLWithToken("corpus/get", params)
      //   .then(response => {})
      //   .catch(error => {});
      let SECparams = { userName: "11111" };
      console.log("发送请求");
      this.$axios
        .getWithURLWithToken("corpus/get", SECparams)
        .then(response => {})
        .catch(error => {});
    },
    testAdd() {
      let params = {
        userName: "11111",
        collectionName: "第1次web测试",
        // articleName: "xixixix嘎嘎",
        userId: 1,
        publicOrNot: true
      };
      this.$axios
        .postWithURLWithToken("corpus/add", params)
        .then(response => {
          var i;
          for (i = 0; i < response.data.corpus.length; i++) {
            console.log(response.data.corpus[i]);
          }
        })
        .catch(error => {});
    },
    testfollowArticle() {
      let userName = "11111";
      let params = { userName: userName };
      this.$axios
        .getWithURLWithToken("follower_articles/get", params)
        .then(response => {})
        .catch(error => {});
    }
  }
};
</script>