<template>
  <el-main>
    <el-row type="flex"  justify="center" style="margin-top:5%;">
      <el-col :span="20">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <div class="inputBox" v-if="active==0">
          <el-input v-model="userName" placeholder="用户名"></el-input>
        </div>
        <div class="inputBox" v-if="active==1">
          <div class="selectBox">
            <el-select v-model="value" placeholder="请选择密保问题">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <el-input v-model="answer" placeholder="答案"></el-input>
        </div>
        <div class="inputBox" v-if="active==2">
          <el-input v-model="password" placeholder="请输入新密码"></el-input>
          <el-input v-model="checkPasswordData" placeholder="请再次输入新密码" @input="checkPassword()"></el-input>
            <div class="iconBox" v-if="notAllowPassword">
              <i class="el-icon-error"></i>
            </div>
            <div class="iconBox" v-if="allowPassword">
              <i class="el-icon-success"></i>
            </div>
        </div>
        <div class="buttonBox">
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div>
      </el-col>
    </el-row>
  </el-main>
</template>

<style lang="scss" scoped>
@import "../assets/css/forgetPassword.scss";
</style>

<script>
export default {
  data() {
    return {
      userName: "",
      answer: "",
      active: 0,
      password:"",
      checkPasswordData:"",
      allowPassword:false,
      notAllowPassword:false,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    next() {
      this.active++;
      if (this.answer == "") {
        //在次处判断答案是否正确
        //或者发送请求交给后端来做这件事
      }
      if (this.active == 3) {
        //在这里发送数据给后端判断然后根据response来弹出messageBox
        //然后刷新当前页面
        this.messageBox();
      }
    },
    messageBox() {
      this.$confirm("修改密码成功", "提示", {
        confirmButtonText: "确定",
        type: "success"
      }).then(() => {
        this.$router.push({ path: "/" });
        this.$message({
          type: "success",
          message: "正在跳转回首页!"
        });
      });
    },
    checkPassword(){
      if(this.password == this.checkPasswordData){
        this.allowPassword = true;
        this.notAllowPassword = false;
      }else{
        this.notAllowPassword = true;
        this.allowPassword = false;
      }
    }
  }
};
</script>