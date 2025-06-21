<template>
    <div class="main-nav">
        <div 
            class="detail-box" 
            v-for="(item, index) in navList" 
            :key="index"
            @click="handleNavClick(item.path, index)"
        >
            <img :src="isActive(index) ? item.img[1] : item.img[0]" alt="">
            <div>{{ item.name }}</div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref,watch} from 'vue'
import { useRouter, useRoute } from 'vue-router'

import mainOff from '@/img/Nav/main-off.png'
import orderOff from '@/img/Nav/order-off.png'
import listOff from '@/img/Nav/list-off.png'
import ownOff from '@/img/Nav/own-off.png'
import mainOn from '@/img/Nav/main-on.png'
import orderOn from '@/img/Nav/order-on.png'
import listOn from '@/img/Nav/list-on.png'
import ownOn from '@/img/Nav/own-on.png'

const router = useRouter()
const route = useRoute()

const navList = [
    {
        path: '/',
        name: '首页',
        img: [mainOff, mainOn]
    },
    {
        path: '/order',
        name: '点餐',
        img: [orderOff, orderOn]
    },
    {
        path: '/list',
        name: '订单',
        img: [listOff, listOn]
    },
    {
        path: '/own',
        name: '我的',
        img: [ownOff, ownOn]
    }
]

const activeIndex = ref(0) 

onMounted(() => {
  const index = route.meta.id;
  if (index !== -1) {
    activeIndex.value = index;
  }
});

watch(
  () => route.meta.id,
  (newId) => {
    const index = newId;
    if (index !== -1) {
      activeIndex.value = index;
    }
  },
    { immediate: true } 
);

const handleNavClick = (path, index) => {
    activeIndex.value = index
    router.push(path)
}

const isActive = (index) => {
    return activeIndex.value === index
}
</script>

<style scoped>
.main-nav {
    background-color: var(--interpret-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #ccc;
    z-index: 99;
}
.detail-box {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-direction: column;
    margin-right: 10px;
}
.detail-box img {
    width: 45px;
    height: 45px;
}
.detail-box div {
    font-size: 16px;
    color: #554242;
}
</style>
