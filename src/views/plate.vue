<template>
  <el-container>
    <el-header style="background-color: white;">
      <my-head></my-head>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="18">
          <layout></layout>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>



<script>
import layout from "./../components/layout.vue";
import myHead from "./../components/header/headerBackUp.vue";
export default {
  components: {
    myHead,
    layout
  },
  data() {
    return {};
  }
};
</script>