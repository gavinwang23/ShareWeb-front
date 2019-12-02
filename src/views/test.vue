<template>
  <div class="container">
    <el-button round @click="test()"></el-button>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/css/test.scss";
</style>

<script>
/* 
  通过用户名或者文章列表或文集列表使用的axios例子
  axios发送get请求时不需要序列化，直接发送JSON对象即可
 */
import QS from "qs";
export default {
  data() {
    return {};
  },
  methods: {
    test() {
      let userName = "11111";
      let params = { userName: userName };
      this.$axios
        .getWithURLWithToken("corpus/get", params)
        .then(response => {
          var i;
          for (i = 0; i < response.data.corpus.length; i++) {
            console.log(response.data.corpus[i]);
          }
        })
        .catch(error => {});
    }
  }
};
</script>