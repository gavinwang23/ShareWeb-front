<template>
  <div class="container">
    <el-button round @click="test()"></el-button>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/css/test.scss";
</style>


<script>
import QS from "qs";
export default {
  data() {
    return {
      // test:"",
    };
  },
  methods: {  
    test(){
      let userName = "11111";
      // let params = "userName="+userName+"";
      let params = {userName:userName};
      let QSparams = QS.stringify(params);
      // JSON.parse(params)
      // var params=new FormData;
      // params.append("userName",11111)
      this.$axios
        // .getWithURLWithToken('articles/get',QS.stringify(params))
        .getWithURLWithToken('corpus/get',params)
        .then(response=>{
          
        })
        .catch(error=>{
        })
    }
  }
};
</script>