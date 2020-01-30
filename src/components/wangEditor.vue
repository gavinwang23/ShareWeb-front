<template>
    <div>
        <div id="div1" ref="editor" :style="{height:height}"></div>
        <Button v-show="write" shape="circle" type="primary" @click="getContent" style="margin-top:8.5vh">{{title}}</Button>
        <Button v-show="comment" shape="circle" type="primary" @click="getContent,commentadd()" style="margin-top:8.5vh">{{message}}</Button>
    </div>
</template>
<style type="text/css">
  .w-e-text-container{
    height:inherit !important;
}  
.w-e-menu{
  margin-right:2vw;
  background:#ffffff;
}
.w-e-toolbar{
  flex-wrap:wrap;
  background-color: #ffffff !important;
}
</style>
<script>
import E from 'wangeditor'
import { white } from 'color-name'
 export default {
      name: 'editor',
      data () {
        return {
            editor: '',
            editorContent: '',
            C1:true,
            C2:false,      
        }
      },
      props:["height","message","write","comment","title"],
      // created(){
      //    this.comment();
      //  },
      methods: {
        getContent: function () { 
            console.log(this.editorContent) //获取富文本内容
            this.editor.txt.clear()  //清空富文本的内容
            var html = editor.$txt.html;
        },
        // commentpage(){
        //   if (editor == comment) {
        //      editor.config.menus = [ 'bold',
        // 'underline',
        // 'italic',
        // 'strikethrough',]
        //   }
        // }
       //增加评论
        commentadd(){
          console.log("增加评论")
          let articletitle = this.title;
          let comment = this.html;
          let param ={articletitle:articletitle , comment:comment}
          this.$axios
          .getWithURLWithToken("comment/add",param)
          .then(response=>{
            this.$emit('good');
          })
          .catch(error=>{
            this.$emit('error');
          })
        },
      },
     mounted() {
        // var editor = new E('#editorElem')
        this.editor = new E(this.$refs.editor)
        this.editor.customConfig.uploadImgShowBase64 = true //图片以base64形式保存
        this.editor.customConfig.uploadImgServer='/';
        //  当富文本编辑器中的内容有更改的时候同步内容到editorContent
        // this.editor.customConfig.onchange = (html) => {
        //   this.editorContent = html
        // }
        this.editor.customConfig.pasteTextHandle = (content) => { //支持粘贴
            return content
        }
        this.editor.customConfig.zIndex = 1;
        this.editor.create()
      },
  
  }
</script>