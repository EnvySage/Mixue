<template>
    <div class="top-bar">
        <div class="TabCard">
            <div class="TabCard-item" @click="handleClick(0)" :class="{active: activeIndex === 0}">
                自提
            </div>
            <div class="TabCard-item" @click="handleClick(1)" :class="{active: activeIndex === 1}">
                外送
            </div>
        </div>
        <div class="search">
            <div class="iconfont icon-sousuo" ></div>
            <input type="text" placeholder="搜索商品" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(0)
const handleClick = (index) => {
    activeIndex.value = index
}
</script>

<style scoped>
.top-bar {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding-top: 15px;
}
.search{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    position: relative;
}
.icon-sousuo{
    position: absolute;
    left: 30px;
}
.search input {
    background-color: #f3f3f7;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 20px;
    padding: 0 40px;
    font-size: 16px;
}
.TabCard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 40%;
    padding: 0 20px;
    user-select: none;
}
.TabCard-item {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(34, 30, 30) ;
    font-size: 24px;
    cursor: pointer;
}
.TabCard-item.active {
    background-color: #fff;
    color:var(--text-color) ;  
    font-weight: bold;
}
</style>