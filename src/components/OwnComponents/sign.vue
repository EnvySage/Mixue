<template>
    <div  class="own-signs">
        <div class="sign-container">
            <div class="sign-left">
                <div class="sign-name">
                    {{ props.name }}
                </div>
                <div class="sign-num">
                    {{ props.num }}
                </div>
            </div>
            <div class="sign-right">
                <div class="sign-img">
                    <img :src="props.img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,defineProps, } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
    name: {
        type: String,
        default: '未命名'
    },
    num: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>

.sign-container {
    display: flex;
    width: 100%;
    /* flex-direction: row;
    position: relative; */
    justify-content: space-around;
}
.sign-left {
    display: flex;
    width: 50%;
    flex-direction: column;
}
.sign-right {
    display: flex;
    
   
    width: 50%;
   
}
.sign-name {
     display: flex;
    font-size: 12px;
    flex-wrap: nowrap;
    color: #666;
}
.sign-num {
     display: flex;
    font-size: 14px;
    color: #333;
    font-weight: bold;
    flex-wrap: nowrap;
}
.sign-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
}
.sign-img img {
    width: 100%;
    height: 100%;
    
    bottom: 0;
    object-fit: cover
    }
</style>