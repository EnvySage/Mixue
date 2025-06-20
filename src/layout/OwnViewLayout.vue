<template>
    <div style="background: linear-gradient(to bottom, rgb(219, 231, 255),rgb(255, 255, 255) );">
        这是我的布局
        <coma></coma>
        <power :png="imgList"></power>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import coma from '@/components/OwnComponents/coma.vue'
import power from '@/components/OwnComponents/power.vue'
import img1 from '../img/own/own-rank/own1.png'
import img2 from '../img/own/own-rank/own1.png'
import img3 from '../img/own/own-rank/own1.png'
import img4 from '../img/own/own-rank/own1.png'

const imgList = [img1,img2,img3,img4]

</script>

<style scoped>

</style>