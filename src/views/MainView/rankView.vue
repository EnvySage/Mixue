<template>
  <div
    style="
      background: linear-gradient(
        to bottom,
        rgb(219, 231, 255),
        rgb(255, 255, 255)
      );
      height: 100vh;
    "
  >
    <div class="own-header">
      <span class="header"> </span>
      <div class="header-phone">
        {{ phone }}
      </div>
    </div>
    <div class="power-nav" v-for="i in jsonData" :key="i.powerid">
      <img :src="imgList[i.powerid - 1]" alt="" />
      <h1 class="power-for-rank">{{ i.rank }}</h1>
      <power_nav_exp :exp="exp" :max_exp="i.max_exp" :min_exp="i.min_exp" :next_exp="i.next_exp" :current_exp="i.current_exp" :all_power="i.all_power" :color="i.color"/>
    </div>
  </div>
</template>

<script setup>
import power_nav_content from "@/components/OwnComponents/powercomponent/power_nav_content.vue";
import power_nav_exp from "@/components/OwnComponents/powercomponent/power_nav_exp.vue";
import json from "../../../public/power.json";
import { ref, defineProps } from "vue";
const phone = ref("138******78");
const props = defineProps({});
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
</script>

<style scoped>
.own-header {
  display: flex;
  align-items: center;
  width: auto;
  padding: 20px 10px;

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
.power-nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 60%;
    border: 1px solid #ccc;
    color: white;
    background-color: #ccc;
}
</style>
