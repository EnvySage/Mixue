<template>
    <div class="power">
        <div class="power-header">
            <div class="power-left" >
                <div class="power-title">
                    <h4>{{ props.rank }}</h4>
                    <div class="power-experience" v-if="props.min_exp<=props.exp && props.exp<=props.max_exp">
                        <div class="power-exp">甜蜜值 {{ props.exp }} / {{ props.max_exp }}</div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" id="progress-bar"></div>
                        </div>
                        <div class="power-exp-text">再升一级可享【{{ props.next_exp }}】等权益</div>
                    </div>
                    <div class="power-experience" v-else>
                        <div class="power-exp-text">
                            累计{{ props.min_exp + 1}}点甜蜜值，享【{{ props.next_exp }}】等权益
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
                <button class="power-item-title">
                    您已解锁<span style="color:#f40">{{ props.all_power }}</span>项特权 >
                </button>
                <div class="power-nav">
                    <div class="power-nav-item" @click="() => {activeTab = 'tab1'}" id="tab1" style="background-color: rgb(242, 246, 255);">
                        <div  style="color: rgb(66, 66, 66);">每日礼</div  >
                    </div>
                    <div class="power-nav-item" @click="() => {activeTab = 'tab2'}" id="tab2">
                        <div  style="color: rgb(66, 66, 66);">成长礼</div  >
                    </div>
                    <div class="power-nav-item" @click="() => {activeTab = 'tab3'}" id="tab3">
                        <div  style="color: rgb(66, 66, 66);">心意礼</div>
                    </div>  
                </div>
                <div class="power-nav-contents">
                    <div class="power-nav-content" v-if="activeTab === 'tab1'">
                            <div v-for="i in props.powericon[0].elements" :key="i.id" class="power-for">
                                <span :class= i.icon class="iconfont"></span>
                                <span class="power-for-name">{{ i.name }}</span>
                                <span class="power-for-desc">{{ i.desc }}</span>
                            </div>
                    </div>
                    <div class="power-nav-content" v-if="activeTab === 'tab2'" >
                            <div v-for="i in props.powericon[1].elements" :key="i.id" class="power-for">
                                <span :class= i.icon class="iconfont"></span>
                                <span class="power-for-name">{{ i.name }}</span>
                                <span class="power-for-desc">{{ i.desc }}</span>
                            </div>
                    </div>
                    <div class="power-nav-content" v-if="activeTab === 'tab3'">
                            <div v-for="i in props.powericon[2].elements" :key="i.id" class="power-for">
                                <span :class= i.icon class="iconfont"></span>
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
        default:''
    },
    all_power:{
        type: Number,
        default: 6
    },
    powericon:{
        type: Object,
        default:null
    }
});


function updateProgressBar(value) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = value + '%'; // 设置进度条的宽度
}
onMounted(() => {
    updateProgressBar(props.exp / props.max_exp * 100);
    console.log(props.rank);
});
const activeTab = ref('tab1');
watch(activeTab, (newVal, oldVal) => {
  if (newVal === 'tab1') {
    const st=document.getElementById('tab1');
    st.style.backgroundColor = 'rgb(242, 246, 255)';
    tab2.style.backgroundColor = 'white';
    tab3.style.backgroundColor = 'white';
    console.log('tab1');    
    return;
    }
  if (newVal === 'tab2') {
    const st=document.getElementById('tab2');
    st.style.backgroundColor = 'rgb(242, 246, 255)';
    tab1.style.backgroundColor = 'white';
    tab3.style.backgroundColor = 'white';
    console.log('tab2');
    return;
  }
  if (newVal === 'tab3') {
    const st=document.getElementById('tab3');
    st.style.backgroundColor = 'rgb(242, 246, 255)';
    tab1.style.backgroundColor = 'white';
    tab2.style.backgroundColor = 'white';
    console.log('tab3');
    return;
  }
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
     overflow: hidden;
}
.power-header{
    display: flex;
    justify-content: space-between;
    
}
.power-exp{
    font-size: 14px;
}
.power-left{
    width: 60%;
    margin: 0 20px;
    line-height: 29px;
    color: #ffffff;
}
.power-img{
    position: relative;
    top: 0;
    max-width: 70%;
    margin: 0 10px;
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
    overflow-x: auto
    
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