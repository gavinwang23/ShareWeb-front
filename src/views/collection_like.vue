<template>
  <div>
    <div class="headerBox">
      <myHead></myHead>
    </div>
    <div class="mainBox">
      <el-main>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="18">
            <div class="mainHeaderBox">
              <h1 class="active">喜欢</h1>
              <h1>收藏</h1>
            </div>
            <div class="mainContentBox">
                <layout>

                </layout>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </div>
  </div>
</template>

<style src="./../assets/css/collectionAndLike.scss" lang="scss" scoped>
</style>

<script>
import myHead from "./../components/header/header.vue";
import layout from "./../components/layout.vue";
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