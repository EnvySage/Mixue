<template>
    <div style="background: linear-gradient(to bottom, rgb(219, 231, 255),rgb(255, 255, 255) );">
        这是我的布局
        <coma></coma>
        <div class="power-item">
            <div v-for="i in jsonData" :key="i.powerid" class="power-item-container">
                <power :rank="i.rank" :exp="exp" :max_exp="i.max_exp" :min_exp="i.min_exp" 
                :next_exp="i.next_exp" :current_exp="i.current_exp" :all_power="i.all_power" :png="imgList[i.powerid-1]" 
                :powericon="i.powericon" :color="i.color"></power>
            </div>
        </div> 

           
        
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import json from '../../public/power.json'
import coma from '@/components/OwnComponents/coma.vue'
import power from '@/components/OwnComponents/power.vue'
import img1 from '../img/own/own-rank/own1.png'
import img2 from '../img/own/own-rank/own1.png'
import img3 from '../img/own/own-rank/own1.png'
import img4 from '../img/own/own-rank/own1.png'
const exp = ref(90);
const imgList = [img1,img2,img3,img4]
const jsonData = ref([]);
jsonData.value = json.power;


</script>

<style scoped>
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
}
.power-item-container{
    width: 100%;
}
.power-item::-webkit-scrollbar {
    display: none;
}
</style>