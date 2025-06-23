<template>
    <div class="power" id="power" :style="{background: `linear-gradient(to right, ${randomColor1}, ${randomColor2})`}">
        <RouterLink to="/power" class="power-header">
            <div class="power-left" >
                <div class="power-title">
                    <h4>{{ props.rank }}</h4>
                    <power_nav_exp :exp="props.exp" :max_exp="props.max_exp" :min_exp="props.min_exp" :next_exp="props.next_exp" :current_exp="props.current_exp" :all_power="props.all_power" :color="props.color"></power_nav_exp>
                </div>
            </div>
            <div class="power-right">
                <img :src=props.png alt="" class="power-img">
            </div>
        </RouterLink>
        <div class="power-content">
            <div class="power-item">
                <RouterLink to="/power" class="power-item-title" v-if="props.exp>props.min_exp && props.exp<=props.max_exp">
                    您已解锁<span style="color:#f40">{{ props.all_power }}</span>项特权 >
                </RouterLink>
                <RouterLink to="/power" class="power-item-title" v-else>
                    {{ props.rank }}会员尊享{{ props.all_power }}项特权 >
                </RouterLink>
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
                                <power_nav_content :i="i" :touming="touming" :randomColor4="randomColor4" :lock="lock"></power_nav_content>
                            </div>
                    </div>
                    <div class="power-nav-content" v-if="activeTab === 'tab2'" >
                            <div v-for="i in props.powericon[1].elements" :key="i.id" class="power-for">
                                <power_nav_content :i="i" :touming="touming" :randomColor4="randomColor4" :lock="lock"></power_nav_content>
                            </div>
                    </div>
                    <div class="power-nav-content" v-if="activeTab === 'tab3'">
                            <div v-for="i in props.powericon[2].elements" :key="i.id" class="power-for">
                                <power_nav_content :i="i" :touming="touming" :randomColor4="randomColor4" :lock="lock"></power_nav_content>
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
import power_nav_content from '../OwnComponents/powercomponent/power_nav_content.vue';
import power_nav_exp from '../OwnComponents/powercomponent/power_nav_exp.vue';

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
    
    min-width: 100px;
    display: flex;
    flex-direction: column;
    
    text-align: center;
    cursor: pointer;
    transition: color 0.3s ease;
}
.iconfont{
    /* font-size: 30px; */
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