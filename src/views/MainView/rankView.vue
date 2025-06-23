<template>
  <div style=" background: linear-gradient( to bottom, rgb(219, 231, 255), rgb(255, 255, 255));height: 100%;" class="own-rank-view">
    <div class="back-button" @click="goBack">
      <div class="iconfont icon-fanhui"></div>
    </div>
    <div class="own-header">
      <span class="header"> </span>
      <div class="header-phone">
        {{ phone }}
      </div>
    </div>
    <div class="power-header">
      <div class="power-navs" v-for="i in jsonData" :key="i.powerid" :style="getStyle(i.powerid)" :id="i.powerid-1">
        <div class="power-nav" 
        :style="{background: `linear-gradient(to right, ${i.color[1].code}, ${i.color[0].code})`}">
          <img :src="imgList[i.powerid - 1]" alt="" />
          <h1 class="power-for-rank">{{ i.rank }}</h1>
          <power_nav_exp :exp="exp" :max_exp="i.max_exp" :min_exp="i.min_exp" 
          :next_exp="i.next_exp" :current_exp="i.current_exp" :all_power="i.all_power" 
          :color="i.color" />
        </div>
        <div class="power-nav-text">{{ i.rank }}会员尊享<span style="font-weight: 550;">{{ i.all_power }}项权益</span></div>
            <div v-for="item in i.powericon" :key="item.id" class="power-for-name" >
              <span class="iconfontname" style="font-weight: 550;">{{ item.name }}</span>
              <div class="power-for-content">
                <div class="power-for" v-for="j in item.elements" :key="j.id" >
                  <power_nav_content :i="j" :touming="touming" :randomColor4="i.color[3].code" :lock="lock"></power_nav_content>
                </div>
              </div>
            </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import power_nav_content from "../../components/OwnComponents/powercomponent/power_nav_content.vue";
import power_nav_exp from "@/components/OwnComponents/powercomponent/power_nav_exp.vue";
import json from "../../../public/power.json";
import { ref, defineProps,watch,onMounted } from "vue";
const phone = ref("138******78");
const jsonData = ref([]);
jsonData.value = json.power;
import img1 from "../../img/own/own-rank/own1.png";
import img2 from "../../img/own/own-rank/own2.png";
import img3 from "../../img/own/own-rank/own3.png";
import img4 from "../../img/own/own-rank/own4.png";
// const randomColor1 = props.color[0].code;
// const randomColor2 = props.color[1].code;
// const randomColor3 = props.color[2].code;
// const randomColor4 = props.color[3].code;
// const randomColor5 = props.color[5].code;
const imgList = [img1, img2, img3, img4];
const exp = ref(400);
function getStyle(powerid) {
  if (powerid === 1) {
    return { 'margin-left': '90px', 'margin-right': '60px' };
  } else if (powerid === 4) {
    return { 'margin-left': '60px', 'margin-right': '90px' };
  } else {
    return { 'margin-left': '60px', 'margin-right': '50px' };
  }
}
const lock =ref('icon-suo')
const touming =ref(2)
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
// scroll.scrollToIndex = scrollToIndex;
// scroll.calculateScrollIndex = calculateScrollIndex;
onMounted(() => {
    const index = calculateScrollIndex();
    const elementList = document.getElementById(index);
    elementList.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
const goBack = () => {
  history.back();
};
</script>

<style scoped>
@import url('//at.alicdn.com/t/c/font_4955194_amn6y8jn15m.css');
.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
}

.iconfont {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  font-size: 24px;
  padding: 10px;
}
.own-header {
  display: flex;
  align-items: center;
  width: auto;
  padding: 20px 10px;
  padding-top: 70px ;
  flex-direction: row;
}
.header {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-image: url("src/img/蜜雪冰城.png");
  border-radius: 50%;
  background-color: #fff7fa;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.power-header{
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
    justify-content: space-between;
    margin: 10px 0;
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: contain;
    scroll-behavior: smooth;
}
.header-phone {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  color: azure;
  font-size: 14px;
}
.power-experience{
    height: 80px;
    /* opacity: 0.8; */
}
.power-exp{
    font-size: 14px;
}
.power-navs{
  
  min-width: 250px;
  margin: 0 30px;
}
.power-nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    justify-content: center;
    min-width: 250px;
    width: 100%;
    /* margin: 0 30px; */
    border: 1px solid #ccc;
    color: white;
    background-color: #ccc;
    border-radius: 20px;
    scroll-snap-align: center;
    scroll-snap-stop: always;
}


.power-nav-content{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    
}
.power-for{
    margin-top: 10px;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    
    text-align: center;
    cursor: pointer;
    transition: color 0.3s ease;
}
.power-for-name{
  display: flex;
  flex-direction: column;
  
  
}
.iconfontname{
  position: relative;
  left: -20px;
  margin: 10px 0;
}
.power-for-content{
  display: flex;
  flex-direction: row;
  position: relative;
  
  align-content: center;
  left: -30px;
  padding: 5px;
  flex-wrap: wrap;
  min-width: 340px;
}
.power-nav-text{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  padding: 0 auto;
  margin: 10px auto;
}
.power-header::-webkit-scrollbar {
    display: none;
}
</style>
