<template>
  <el-container>
    <div class="el-main">
      <el-row>
        <el-col :span="4">
          <div>
            <div class="grid-content bg-purple-left">
              <button onclick="location.href='/'" class="writing-back-button">回首页</button>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#ffffff"
                text-color="#000"
                active-text-color="#409EFF"
              >
                <el-button @click="newanthology=true" class="writing-newanthology-button" type="text">新建文集</el-button>
                <el-menu-item-group v-show="newanthology">
                    <div>
                      <el-input v-model="input" placeholder="文件集名"></el-input>
                      <el-button class="navigation-buttons-Submission" @click="collectionAdd" round>提交</el-button>
                      <el-button
                        class="navigation-buttons-cancel"
                        @click="newanthology=false"
                      >取消</el-button>
                    </div>
                </el-menu-item-group>
                  <ul><li class="leftlist" v-for="collection in collection" :key="collection" @click="newarticle=true,editorlog=false,editorshow=true,requestarticle()">{{collection}}</li></ul>
                  <!-- <el-button
                      size="mini"
                      icon="el-icon-search"
                      type="text"
                      class="writing-set-button"
                      circle
                  ></el-button>-->
              </el-menu>
              <el-popover placement="top" width="160" trigger="hover">
                <div style="text-align: right; margin: 0">
                  <el-popover placement="left" width="100" trigger="hover">
                    <el-button type="text" size="mini" @click="wangEditor=true,markDown=false">富文本编辑器</el-button>
                    <el-button
                      type="text"
                      class="writing-see-button"
                      size="mini"
                      @click="wangEditor=false,markDown=true"
                    >MarkDown文本编辑器</el-button>
                    <el-button
                      type="text"
                      class="writing-setup-button"
                      size="mini"
                      slot="reference"
                    >选择编辑器</el-button>
                  </el-popover>
                  <el-popover placement="left" width="100" trigger="hover">
                    <el-switch
                      v-model="daynight"
                      active-color="#909399"
                      inactive-color="#409EFF"
                      active-text="夜间"
                      inactive-text="日间"
                    ></el-switch>
                    <el-switch
                      v-model="typeface"
                     active-color="#909399"
                      inactive-color="#409EFF"
                      active-text="宋体"
                      inactive-text="繁体"
                    ></el-switch>
                    <el-switch
                      v-model="Simplified"
                      active-color="#909399"
                      inactive-color="#409EFF"
                      active-text="繁体"
                      inactive-text="简体"
                    ></el-switch>
                    <el-button
                      type="text"
                      class="writing-setup-button"
                      size="mini"
                      slot="reference"
                    >设置显示模式</el-button>
                  </el-popover>
                  <el-button type="text" class="writing-setup-button" size="mini">回收站</el-button>
                  <el-button type="text" class="writing-setup-button" size="mini">帮助与反馈</el-button>
                </div>
                <el-button size="medium" class="writing-problem" slot="reference" type="text">设置</el-button>
              </el-popover>
              <el-button
                size="edium"
                @click="dialogVisible = true"
                class="writing-problem"
                type="text"
              >遇到问题</el-button>
            </div>
            <el-dialog
              title="常见问题"
              :visible.sync="dialogVisible"
              :modal-append-to-body="false"
              width="30%"
            >
              <span>如果你在使用编辑器的过程中遇到问题，可以尝试以下方案解决：</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">知道了</el-button>
              </span>
            </el-dialog>
          </div>
        </el-col>
        <el-col :span="20">
          <div v-show="newarticle">
            <el-menu default-active="2" class="writeArticle" background-color="#ffffff">
              <el-menu-item index="1" @click="articleAdd">
                <el-button type="text">新建文章</el-button>
              </el-menu-item>
                <ul><li class="leftlist" v-for="article in article" :key="article">{{article}}</li></ul>
            </el-menu>
          </div>
          <wangEditor write="true" height="88vh" message="submit" :class="{ wangEditorboxone:editorlog,wangEditorboxtow:editorshow}" v-show="wangEditor"></wangEditor>
          <mavonEditor :class="{ wangEditorboxone:editorlog,wangEditorboxtow:editorshow}" v-show="markDown"></mavonEditor>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../assets/css/writing.scss";
</style>

<script>
import wangEditor from "../components/wangEditor.vue";
import mavonEditor from "../views/mavonEditor.vue";
export default {
  components: {
    wangEditor,
    mavonEditor
  },
  data() {
    return {
      input: "",
      collection:true,
      dialogVisible: false,
      visible: false,
      newanthology: false,
      newarticle: false,
      wangEditor: true,
      markDown: false,
      daynight: false,
      typeface: false,
      Simplified: false,
      editorlog: true,
      editorshow: false,
      editorOption: {},
      collection:[
          "日记本",   
          "随笔",
          ],
      article:[
          "第一章：嘿嘿嘿",
          ],
    };
    // var objWin; 
    // function isOpen(writing) { 
    // 目标页面 
    //  var target = "pop.html?id="+writing; 
    //  判断是否打开 
    //  if (objWin == null || objWin.closed) { 
    //  } else { 
    //      objWin=true; 
    //  } 
    //  objWin.focus(); 
    //  } 
  },
  created(){
    this.requestcollection();
  },
  methods:{
    //请求用户文集
    requestcollection(){
      console.log("请求用户文集");
      let userName = "11111";
      let params ={userName:userName};
      this.$axios
      .postWithURLWithToken("corpus/add",params)
      .then(response =>{
        let list=[];
        for(let i=0;i<=list.length;i++){
          this.list.push(collection[i]);
        }
      })
      .catch(error =>{})
    },
    //新建文集
      collectionAdd(){
        console.log("新建文集");
        let params = {
        userName: "11111",
        collectionName: this.input,
        articleName: "",
        userId: 1,
        publicOrNot: true
      };
      this.$axios
        .postWithURLWithToken("corpus/add", params)
        .then(response => {
          var i;
          for (let i= 0; i < response.data.corpus.length; i++) {
            console.log(response.data.collection[i]);
          }
        })
        .catch(error => {});
    },
    //新建文章
      articleAdd(){
      console.log("新建文章");
      let userName="11111";
      let articleTitele="time";
      let params ={ userName:userName, articleTitele:articleTitele };
      this.$axios
      .postWithURLWithToken("article/get",params)
      .then(response =>{
        let list=[];
        for(let i=0;i<list.length;i++){
          this.list.push(article[i]);
        }
      })
      .catch(error =>{})
    },
    //请求文章
    requestarticle(){
      console.log("请求文章");
      let userName="11111";
      let collectionName=this.collection[i];
      let params ={userName:userName,collectionname:collectionName};
      this.$axios
      .postWithURLWithToken("article/get",params)
      .then(response =>{
        let list=[];
        for(let i=0;i<list.length;i++){
          this.list.push(article[i]);
        }
      })
      .catch(error=>{})
    },
  }
};
</script>