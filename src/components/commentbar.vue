<template>
    <div>
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
</template>
<style lang="scss" scoped>
@import "../assets/css/components/commentbar.scss";
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
            ]
        };
    }
}
</script>