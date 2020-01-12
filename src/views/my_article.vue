<template>
  <el-container>
    <el-header>
    <myHead></myHead>
    </el-header>
    <el-container>

      <el-aside width="200px">
        <sideBar :menubar="['3']"></sideBar>
      </el-aside>

      <el-main>
        <div id="overview">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我的文章" name="first">
                <h1>我的文章</h1>
                <div>
                  <ul>
                    <li v-for="i in list" :key="i.title">
                      <div id>
                        <a href="">{{i.title}}</a>
                      </div>
                      <div>
                        <h5>{{i.time}}</h5>
                      </div>
                      <el-divider></el-divider>
                    </li>
                  </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="赞过的文章" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="收藏文章" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="哈哈哈" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div> 
      </el-main>

    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../assets/css/manager.scss";
@import "../assets/css/myarticle.scss";
</style>

<script>
import myHead from "./../components/header/header.vue";
import sideBar from "./../components/sidebar.vue";
import layout from "./../components/layout.vue";
export default {
   components: {
      myHead,
      sideBar,
      layout,
    }, 
    data () {
      return {
        activeName: 'first',
        list:[
          {
            title: "how to study",
            time:"2019"
          },
          {
            title: "how to study",
            time:"2019"
          },
          {
            title: "how to study",
            time:"2019"
          },
        ]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }

}
</script>>