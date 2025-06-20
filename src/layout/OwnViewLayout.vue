<template>
    <div style="background: linear-gradient(to bottom, rgb(219, 231, 255),rgb(255, 255, 255) );">
        这是我的布局
        <coma></coma>
        <div v-for="i in jsonData" :key="i.powerid" class="power-item">
            <power :rank="i.rank" :exp="exp" :max_exp="i.max_exp" :min_exp="i.min_exp" 
            :next_exp="i.next_exp" :all_power="i.all_power" :png="imgList[i.powerid-1]" 
            :powericon="i.powericon"></power>
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
const exp = ref(10);
const imgList = [img1,img2,img3,img4]
const jsonData = ref([]);
jsonData.value = json.power;
console.log(jsonData.value)
console.log(jsonData.value[0].rank)
console.log(jsonData.value[0].max_exp)

</script>

<style scoped>
.power-item{
   
}
</style>