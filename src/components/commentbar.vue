<template>
    <div>
        <div v-if="commentvalue">
            <ul>
                <li v-for="value in list" :key="value.list" style="list-style-type: none;" class="peripheral">
                    <div class="usernamebox">
                    {{value.userName}}：
                    </div>
                    <div class="commentbox">
                        {{value.comment}}
                    </div>
                    <el-button class="goodbutton">
                        <img src="../assets/icon/good.png" style="height:2vh;width:1vw"> {{value.number}}
                    </el-button>
                </li>
           </ul>
        </div>
    <!-- 加载时显示 -->
         <div v-if="commentloding" v-loading="loading" element-loading-text="拼命加载中" class="loadingbox"></div>
        <img v-if="commenterror" src="../assets/icon/lodingfail.png" style="height:12vh;width:6vw;margin-left:26vw"><div v-show="commenterror" class="notcomment">加载失败</div>
        <img v-if="notcomment" src="../assets/icon/notcomment.png" style="height:12vh;width:6vw;margin-left:25vw"><div v-show="notcomment" class="notcomment">暂无评论</div>
    </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/components/commentbar.scss";
@import "../assets/css/article.scss";
</style>
<script>
export default {
    data(){
        return{
            list:[
                {
                userName:"11111",
                comment:"很久很久以前有个补碗匠叫赵光义。赵光义是补碗匠中的高手。这天，赵光义挑着工具担子，刚走进一条胡同，便被一个人拽进一处院子里。这个人叫王直，他...",
                number:"23",
                },
                {
                userName:"11111",
                comment:"很久很久以前有个补碗匠叫赵光义。赵光义是补碗匠中的高手。这天，赵光义挑着工具担子，刚走进一条胡同，便被一个人拽进一处院子里。这个人叫王直，他...",
                number:"23",
                },
            ],
        loading:true,
        commentloding:true,
        commentvalue:false,
        commenterror:false,
        notcomment:false,
        };
    },
    props:[],
    created(){
        this.requestcomment();
    },
    methods:{
        //请求评论的接口
        requestcomment(){
            console.log("请求评论")
            this.$axios
            .getWithURL("", param)
            .then(response=>{

            })
            .catch(error=>{
                this.commentloding = false;
                this.commenterror = true;
            })           
        },
        //判断是否有评论
        havecomment(){
             return function (notcomment,commentloding,commentvalue) {
                if(list.length <= 0 && commenterror == fasle){
                    //为空
                    this.notcomment = true;
                    this.commentloding = false;
                }else if(list.length > 0 ){
                    //非空
                    this.commentvalue = true;
                    this.commentloding = false;
                }
             };
        },
    }
}
</script>