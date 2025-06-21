<template>
    <div class="moreserver">
        <span class="iconfont" :class="icon" :style="icon == 'icon-laodaixin-quanbao' ? 'color: red;' : ''"></span>
        <span class="text">{{name}}</span>
    </div>
</template>

<script setup>
import { ref,defineProps } from 'vue'
const props = defineProps({
    icon: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.moreserver {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:15px;
}
.iconfont {
    display: flex;
     width: 50px;
    height: 50px;
    font-size: 24px;
    color: #000000;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;
    border-radius: 50%;
}
.text{
    font-size: 14px;
    color: #999999;
}
</style>