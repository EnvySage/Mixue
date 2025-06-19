<template>
    <div class="power">
        <div class="power-header">
            <div class="power-left" >
                <div class="power-title">
                    <h4>{{ rank }}</h4>
                    <div class="power-experience" v-if="min_exp<=exp && exp<=max_exp">
                        <div class="power-exp">甜蜜值 {{ exp }} / {{ max_exp }}</div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" id="progress-bar"></div>
                        </div>
                        <div class="power-exp-text">再升一级可享【{{ next_exp }}】等权益</div>
                    </div>
                    <div class="power-experience" v-else>
                        <div class="power-exp-text">
                            累计{{ min_exp + 1}}点甜蜜值，享【{{ next_exp }}】等权益
                        </div>
                    </div>
                </div>
            </div>
            <div class="power-right">
                <img :src="`../../img/own/own-rank/${png}.png`" alt="" class="power-img">
            </div>
        </div>
        <div class="power-content">
            <div class="power-item">
                <div class="power-item-title">
                    您已解锁
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted,defineProps } from 'vue';
const props = defineProps({
    rank: {
        type: String,
        default: '微雪花'
    },
    exp:{
        type: Number,
        default: 10
    },
    max_exp:{
        type: Number,
        default: 30
    },
    min_exp:{
        type: Number,
        default: 0
    },
    next_exp:{
        type: String,
        default: '生日福利'
    },
    png:{
        type: String,
        default:'own-weixuehua'
    }

});
function updateProgressBar(value) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = value + '%'; // 设置进度条的宽度
}
onMounted(() => {
    updateProgressBar(props.exp / props.max_exp * 100);
});
</script>

<style scoped>
h4{
    margin: 10px 0;
}
.power{
    margin: 10px 10px;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    
    background: linear-gradient(to right, rgb(87, 162, 255), rgb(50, 94, 255));
    display: flex;
    flex-direction: column;
}
.power-header{
    display: flex;
    justify-content: space-between;
    
}
.power-exp{
    font-size: 14px;
}
.power-left{
    width: 50%;
    margin: 0 20px;
    line-height: 29px;
    color: #ffffff;
}
.power-img{
    position: relative;
    top: 0;
    max-width: 70%;
    margin: 0 20px;
    text-align: center;
}
.power-title{
    display: flex;
    flex-direction: column;
}
.progress-bar-container {
    width: 100%; /* 定义进度条容器的宽度 */
    background-color: rgb(112, 163, 251); /* 定义背景颜色 */
    height: 5px;
    
    border-radius: 5px; /* 可选：添加圆角 */
    overflow: hidden; /* 确保超出容器的内容不可见 */
}
.progress-bar {
    height: 5px; /* 定义进度条的高度 */
    width: 0%; /* 初始宽度为0% */
    background-color: #ffffff; /* 定义进度条的颜色 */
    text-align: center;
    line-height: 5px;
    color: white;
    transition: width 0.5s; /* 添加过渡效果，使宽度变化平滑 */
}
.power-exp-text{
    font-size: 10px;
    margin-top: 5px;
}
</style>