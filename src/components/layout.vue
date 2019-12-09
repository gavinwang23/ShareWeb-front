<template>
  <div>
    <ul class="infinite-list" v-infinite-scroll="load" >
      <li v-for="i in list" :key="i.title">
        <div class="articleTitleBox">
          <router-link to>
            <b>{{i.title}}</b>
          </router-link>
        </div>
        <!-- <div class="articleImgBox"><img src="static\picture\pic.jpg" align="right"></div> -->
        <div class="articleContainerBox">
          <!-- <div class="imgBox"> -->
          <img src="../assets/picture/pic.jpg" align="right" />
          <!-- </div> -->
          {{i.time}}
        </div>
      </li>
    </ul>
    <!-- 加载时候出现的 -->
    <div class="loading" v-if="loadingData">
      <div class="nullTitleBox"></div>
      <div class="nullContentBox1"></div>
      <div class="nullContentBox2"></div>
      <div class="nullFooter"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/components/layout.scss";
</style>

<script>
export default {
  data() {
    return {
      loadingData: false,
      list: [
        {
          title: "How to study Vue",
          time: "2016-04-10"
        },
        {
          title: "How to study Typescript",
          time: "2019-11-10"
        }
      ],
      list2: [
        {
          title: "How to study Vue",
          time: "2016-04-10"
        },
        {
          title: "How to study Typescript",
          time: "2019-11-10"
        }
      ]
    };
  },
  methods: {
    load(){
      let i=1;
      console.log(i+=1)
    }
    // load() {
      // console.log("添加数组元素")
      // this.list.splice(this.list.length, 0, this.list2);
    // }
  }
};
</script>
