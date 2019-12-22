<template>
    <div>
        <div id="editorElem" ref="editor" style="text-align:left"></div>
        <Button shape="circle" type="primary" v-on:click="getContent">submit</Button>
    </div>
</template>
<style type="text/css">
.w-e-text-container{
    height: 88vh !important;
}
.w-e-menu{
  margin-right:2vw;
  background:#ffffff;
}
.w-e-toolbar{
  width: 100%;
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
      methods: {
        getContent: function () { 
            console.log(this.editorContent) //获取富文本内容
            this.editor.txt.clear()  //清空富文本的内容
        }
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
      }
  }
</script>