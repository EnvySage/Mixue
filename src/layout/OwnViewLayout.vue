<template>
    <div style="background: linear-gradient(to bottom, rgb(219, 231, 255),rgb(255, 255, 255) );">
        这是我的布局
        <coma></coma>
        <div class="power-item">
            <div v-for="(i,index) in jsonData" :key="i.powerid" class="power-item-container">
                <power :rank="i.rank" :exp="exp" :max_exp="i.max_exp" :min_exp="i.min_exp" 
                :next_exp="i.next_exp" :current_exp="i.current_exp" :all_power="i.all_power" :png="imgList[i.powerid-1]" 
                :powericon="i.powericon" :color="i.color" :id="index"></power>
            </div>
        </div> 
        <div class="sign-item">
            <div v-for="(i,index) in signData" :key="i.id" class="sign-item-container">
                <sign :name="i.name" :num="i.num" :img="signImgList[i.id-1]" :id="index">
                </sign>
            </div>
        </div>
        <div class="own-footer">
            <h5>更多服务</h5>
            
        </div>
    </div>
      <MainNav />
</template>

<script setup>
import { ref,onMounted,watch } from 'vue'
import json from '../../public/power.json'
import coma from '@/components/OwnComponents/coma.vue'
import power from '@/components/OwnComponents/power.vue'
import sign from '@/components/OwnComponents/sign.vue'
import img1 from '../img/own/own-rank/own1.png'
import img2 from '../img/own/own-rank/own2.png'
import img3 from '../img/own/own-rank/own3.png'
import img4 from '../img/own/own-rank/own4.png'
import MainNav from '@/components/MainNav.vue'
import img5 from '../img/own/own-sign/own1.png'
import img6 from '../img/own/own-sign/own2.png'
import img7 from '../img/own/own-sign/own3.png'

const exp = ref(400);
const imgList = [img1,img2,img3,img4]
const signImgList = [img5,img6,img7]
const jsonData = ref([]);
jsonData.value = json.power;
const signData = ref([]);
signData.value = json.sign;
const powerItem = ref(null);
const powerItemContainers = ref([]);

// 计算需要滚动到的容器索引
const calculateScrollIndex = () => {
    for (let index = 0; index < jsonData.value.length; index++) {
        const item = jsonData.value[index];
        if (item.min_exp <= exp.value && exp.value <= item.max_exp) {
            return index;
        }
    }
    return 0; // 默认滚动到第一个容器
};
const scrollToIndex = (index) => {
    if (powerItemContainers.value && powerItemContainers.value[index]) {
        powerItemContainers.value[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};
watch(exp, (newVal) => {
    const index = calculateScrollIndex();
    scrollToIndex(index);
});

onMounted(() => {
    const index = calculateScrollIndex();
    const elementList = document.getElementById(index);
    elementList.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

</script>

<style scoped>
@import url('//at.alicdn.com/t/c/font_4955194_4nvmwfz3mnn.css');
.power-item{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
     overscroll-behavior-x: contain;
     padding: 0 auto;
}
.power-item-container{
    width: 100%;
    scroll-snap-align: center;
    scroll-snap-stop: always;
}
.power-item::-webkit-scrollbar {
    display: none;
}
.sign-item{
    display: flex;
   
    
    justify-content: space-between;
    margin: 0 10px;
    
    }
.sign-item-container{
    display: flex;
    width:auto;
    border-radius: 10px;
    padding: 10px;
    background-color: #f9f9f9;
}
</style>