<template>
  <div id="app" @mousewheel="test">
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
@import url("./assets/css/public.scss");
</style>



<script>
export default {
  methods:{
    test(e) {
      /* 组件渐变效果相关代码 
      if (e.deltaY > 0) {
        //设置组件a消失，组件b出现
        this.$store.commit("headerUp")
      } else {
        //设置组件b出现，组件a消失
        this.$store.commit("headerDown")
      }
      //测试滚轮事件是否能执行
      // window.console.log(e.deltaY);
      */
    }
  }
}
</script>
