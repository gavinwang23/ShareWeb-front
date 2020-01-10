<template>
  <div>
    <el-container>
      <el-row>
        <el-col :span="4">
          <br />
        </el-col>
        <el-col :span="5" class="userFollowList">
          <div class="userListTop">
            <div class="userHead">
              <img
                src="../assets/picture/YaoFanVIP.png"
                width="50px"
                height="50px"
              />
            </div>
            <div class="userName">
              <!-- {{userName}} -->
              Ash
            </div>
            <div class="inputBox">
              <el-input placeholder="search"></el-input>
            </div>
          </div>
          <div class="userChatList">
            <ul>
              <!-- <li
                        v-for="(item,index) in users"
                        :key="index"
                        :class="isActive == index?'active':'' "
                        @click="changeListState(index)"
                      >{{item.user}}
                      </li> -->
              <router-link to>
                <li>
                  <img
                    src="../assets/picture/YaoFanVIP.png"
                    width="50px"
                    height="50px"
                  />
                  <div class="followedUser">
                    12312312
                  </div>
                  <div class="time">
                    12:10
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </el-col>
        <el-col :span="11">
          <div class="chatContent">
            <div class="chatContentHead">
              <!-- {{}} -->
              123312
            </div>
            <div class="chatHistory">
              111
            </div>
            <div class="writeMessage">
                <!-- 使用富文本编辑器 -->
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <br />
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<style src="../assets/css/chat.scss" lang="scss" scoped></style>

<script>
import loginMessage from "./../components/login/loginMessage";
export default {
  components: {
    loginMessage
  },
  data() {
    return {};
  }
};
</script>
