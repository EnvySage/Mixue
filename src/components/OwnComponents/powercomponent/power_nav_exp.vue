<template>
    <div>
        <div class="power-experience" v-if="props.min_exp<=props.exp && props.exp<=props.max_exp">
                        <div v-if="props.max_exp!=10000">
                            <div class="power-exp">甜蜜值 {{ props.exp }} / {{ props.max_exp }}</div>
                            <div class="progress-bar-container" :style="`background-color: ${props.color[2].code};`">
                                <div class="progress-bar" id="progress-bar" :style="`width: ${props.exp / props.max_exp * 100}%; `"></div>
                            </div>
                            <div class="power-exp-text">再升一级可享【{{ props.next_exp }}】等权益</div>
                        </div>
                        <div v-else>
                            <div class="power-exp-text">已到达最高等级，可享有最高{{ props.all_power }}种权益</div>   
                        </div>
                    </div>
                    <div class="power-experience" v-if="props.exp<props.min_exp">
                        <div class="power-exp-text">
                            累计{{ props.min_exp + 1}}点甜蜜值，享【{{ props.current_exp }}】等权益
                        </div>
                    </div>
                    <div class="power-experience" v-if="props.exp>props.max_exp">
                        <div class="power-exp-text">
                            您已超越该等级 -
                        </div>
                    </div>
    </div>
</template>

<script setup>
import {ref,defineProps} from 'vue'

const props = defineProps({
    exp: {
        type: Number,
        default: 0
    },
    max_exp: {
        type: Number,
        default: 100
    },
    min_exp: {
        type: Number,
        default: 0
    },
    next_exp: {
        type: String,
        default: ''
    },
    current_exp: {
        type: String,
        default: ''
    },
    all_power: {
        type: Number,
        default: 0
    },
    color:{
        type: Array,
        default: []
    
    }
})
const randomColor3 = props.color[2].code;

</script>

<style scoped>
.power-exp{
    font-size: 14px;
}
.power-experience{
    height: 80px;
    /* opacity: 0.8; */
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
    font-size: 12px;
    margin-top: 5px;
}
</style>