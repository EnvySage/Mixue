<template>
    <div class="power" id="power" :style="{background: `linear-gradient(to right, ${randomColor1}, ${randomColor2})`}">
        <div class="power-header">
            <div class="power-left" >
                <div class="power-title">
                    <h4>{{ props.rank }}</h4>
                    <div class="power-experience" v-if="props.min_exp<=props.exp && props.exp<=props.max_exp">
                        <div v-if="props.max_exp!=10000">
                            <div class="power-exp">甜蜜值 {{ props.exp }} / {{ props.max_exp }}</div>
                            <div class="progress-bar-container" :style="`background-color: ${randomColor3};`">
                                <div class="progress-bar" id="progress-bar" :style="`width: ${props.exp / props.max_exp * 100}%; `"></div>
                            </div>
                            <div class="power-exp-text">再升一级可享【{{ props.next_exp }}】等权益</div>
                        </div>
                        <div v-else>
                            <div class="power-exp-text">已到达最高等级，可享有最高{{ all_power }}种权益</div>   
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
            </div>
            <div class="power-right">
                <img :src=props.png alt="" class="power-img">
            </div>
        </div>
        <div class="power-content">
            <div class="power-item">
                <button class="power-item-title" v-if="props.exp>props.min_exp && props.exp<=props.max_exp">
                    您已解锁<span style="color:#f40">{{ props.all_power }}</span>项特权 >
                </button>
                <button class="power-item-title" v-else>
                    {{ props.rank }}会员尊享{{ props.all_power }}项特权 >
                </button>
                <div class="power-nav">
                    <div class="power-nav-item" :style="{ backgroundColor: activeTab === 'tab1' ?  randomColor5  : 'white' }" @click="activeTab = 'tab1'">
                        <div  style="color: rgb(66, 66, 66);">每日礼</div  >
                    </div>
                    <div class="power-nav-item" :style="{ backgroundColor: activeTab === 'tab2' ? randomColor5  : 'white' }" @click="activeTab = 'tab2'">
                        <div  style="color: rgb(66, 66, 66);">成长礼</div  >
                    </div>
                    <div class="power-nav-item" :style="{ backgroundColor: activeTab === 'tab3' ? randomColor5  : 'white' }" @click="activeTab = 'tab3'">
                        <div  style="color: rgb(66, 66, 66);">心意礼</div>
                    </div>  
                </div>
                <div class="power-nav-contents">
                    <div class="power-nav-content" v-if="activeTab === 'tab1'">
                            <div v-for="i in props.powericon[0].elements" :key="i.id" class="power-for">
                                <div class="iconfont" v-if="i.status === false">
                                     <span :class= i.icon class="iconfont" :style="`color: ${randomColor4};filter: blur(${touming}px);z-index:0`"></span>
                                     <span class="iconfont" :class="lock" :style="`color: ${randomColor4};position:absolute;top:0;left:0;z-index:1;font-weight: 600 `"></span>
                                 </div>
                                 <div class="iconfont" v-else>
                                     <span :class= i.icon class="iconfont" :style="`color: ${randomColor4};`"></span>
                                 </div>
                                <span class="power-for-name">{{ i.name }}</span>
                                <span class="power-for-desc">{{ i.desc }}</span>
                            </div>
                    </div>
                    <div class="power-nav-content" v-if="activeTab === 'tab2'" >
                            <div v-for="i in props.powericon[1].elements" :key="i.id" class="power-for">
                                <!-- <span :class= i.icon class="iconfont" :style="`color: ${randomColor4};filter: blur(${touming}px);`"></span> -->
                                 <div class="iconfont" v-if="i.status === false">
                                     <span :class= i.icon class="iconfont" :style="`color: ${randomColor4};filter: blur(${touming}px);z-index:0`"></span>
                                     <span class="iconfont" :class="lock" :style="`color: ${randomColor4};position:absolute;top:0;left:0;z-index:1 ;font-weight: 600`"></span>
                                 </div>
                                 <div class="iconfont" v-else>
                                     <span :class= i.icon class="iconfont" :style="`color: ${randomColor4};`"></span>
                                 </div>
                                <span class="power-for-name">{{ i.name }}</span>
                                <span class="power-for-desc">{{ i.desc }}</span>
                            </div>
                    </div>
                    <div class="power-nav-content" v-if="activeTab === 'tab3'">
                            <div v-for="i in props.powericon[2].elements" :key="i.id" class="power-for">
                                <div class="iconfont" v-if="i.status === false">
                                     <span :class= i.icon class="iconfont" :style="`color: ${randomColor4};filter: blur(${touming}px);z-index:0`"></span>
                                     <span class="iconfont" :class="lock" :style="`color: ${randomColor4};position:absolute;top:0;left:0;z-index:1 ;font-weight: 600`"></span>
                                 </div>
                                 <div class="iconfont" v-else>
                                     <span :class= i.icon class="iconfont" :style="`color: ${randomColor4};`"></span>
                                 </div>
                                <span class="power-for-name">{{ i.name }}</span>
                                <span class="power-for-desc">{{ i.desc }}</span>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { onMounted,defineProps,ref,watch } from 'vue';
import { RouterLink } from 'vue-router';


const props = defineProps({
    rank: {
        type: String,
        default: ''
    },
    exp:{
        type: Number,
        default: 0
    },
    max_exp:{
        type: Number,
        default: 0
    },
    min_exp:{
        type: Number,
        default: 0
    },
    next_exp:{
        type: String,
        default: ''
    },
    current_exp:{
        type: String,
        default: ''
    },
    png:{
        type: String,
        default:''
    },
    all_power:{
        type: Number,
        default: 0
    },
    powericon:{
        type: Object,
        default:null
    },
    color:{
        type:Array,
        default:[]
    }
});




const randomColor1 = props.color[0].code;
const randomColor2 = props.color[1].code;
const randomColor3 = props.color[2].code;
const randomColor4 = props.color[3].code;
const randomColor5 = props.color[5].code;

const activeTab = ref('tab1');
const lock =ref('icon-suo')
const touming =ref(2)

</script>

<style scoped>
h4{
    margin: 10px 0;
}
.power{
    margin: 10px 10px;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    ;
    /* background: linear-gradient(to right, rgb(87, 162, 255), rgb(50, 94, 255)); */
    display: flex;
    flex-direction: column;
     overflow: hidden;
}
.power-header{
    display: flex;
    justify-content: space-between;
    
}
.power-exp{
    font-size: 14px;
}
.power-experience{
    height: 80px;
    /* opacity: 0.8; */
}
.power-left{
    width: 75%;
    margin: 0 20px;
    line-height: 29px;
    color: #ffffff;
}
.power-img{
    position: relative;
    top: 0;
    width: 70%;
    margin: 20px 10px;
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
    font-size: 12px;
    margin-top: 5px;
}
.power-item{
    width: 99%-40px;
    margin: 2px 2px;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px 20px;
}
.power-item-title{
    font-size:14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    background-color: white;
    padding: 0;
}
.power-nav{
    display: flex;
    flex-direction: row;
     /* overflow: hidden; */
}
.power-nav-item {
  
  cursor: pointer;
  transition: color 0.3s ease;
  
  margin: 10px 10px 0 0;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 50px;
  border: 1px solid rgb(242, 246, 255);
   /* overflow: hidden; */
}
.power-nav-content{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-top: 10px;
    overflow: hidden;
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: contain;
}
.power-nav-content::-webkit-scrollbar {
    display: none;
}


.power-for{
    margin-top: 5px;
    margin-right:  40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: color 0.3s ease;
}
.iconfont{
    font-size: 30px;
    color: #749bfe;
    position: relative;
}
.power-for-name{
    font-size: 12px;
    color: #333333;
    margin-top: 5px;
    white-space: nowrap;
}
.power-for-desc{
    font-size: 10px;
    color: #999999;
    margin-top: 2px;
    white-space: nowrap;
}

</style>