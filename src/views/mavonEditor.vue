<template>
  <div>
    <div id="main">
      <mavon-editor v-model="value" @imgAdd="imgAdd" :subfield="false"/>
    </div>
    <el-button @click="getContent"></el-button>
  </div>
</template>
<style  type="text/css">
.v-note-panel{
  height:85vh;
}
.op-icon{
margin: 6px 10px 5px 0px !important;
}

</style>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  created(){

  },
  methods: {
    getContent() {
      console.log(this.value);
    },
    imgAdd(pos, files) {
      
    }
  }
};
</script>