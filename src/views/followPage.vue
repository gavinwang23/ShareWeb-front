<template>
  <el-container>
    <el-header style="background-color: white;">
      <div class="headerBox">
        <myHead></myHead>
      </div>
    </el-header>
    <el-container>
      <el-main>
        <el-row type="flex" justify="center" align="middle">
            <el-col :span="18">
                <el-col :span="8">全部关注</el-col>
                <el-col :span="16">222</el-col>
            </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import myHead from "./../components/header/headerBackUp.vue";
export default {
    components: {
    myHead,
  },
}
</script>