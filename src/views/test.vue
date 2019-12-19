<template>
  <div class="container">
    <el-button round @click="test()"></el-button>
    <!-- 测试index接口 -->
    <el-button round @click="testIndex()"></el-button>
    <el-button round @click="testAdd()"></el-button>
    <div class="loading" v-if="loadingData">
      <div class="nullTitleBox"></div>
      <div class="nullContentBox1" :class="{nullContentBox1Transition:loadingData}"></div>
      <div class="nullContentBox2" :class="{nullContentBox2Transition:loadingData}"></div>
      <div class="nullFooter"></div>
    </div>

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
  mounted() {
    console.log("绑定事件成功")
    onscroll=(e)=>{
      if(document.body.offsetHeight<=(pageYOffset+innerHeight)){
        console.log("触底")
      }
    }
  },
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
    },
    testIndex() {
      let params = { pageNo: 1, pageSize: 20 };

      this.$axios
        .getWithURLWithToken("index/articles/get", params)
        .then(response => {})
        .catch(error => {});
    },
    testAdd() {},
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
        //          	console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
        var x = 600;
        document.getElementById("scroll").style.height = x + 100 + "px";
      }
    }
  }
};
</script>