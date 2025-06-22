<template>
    <div class="bread-title-container">
        <div v-for="(item, index) in titleList" :key="index">
            <router-link
                :to="item.url"
                class="bread-title"
                :class="{ active: index === selectedTitle }"
                @click="updateSelectedTitle(index)"
            >
                {{ item.name }}
            </router-link>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const titleList = [
  { name: '全部', url: 'listall' },
    { name: '历史', url: 'listhistory' },
    
    
];

const selectedTitle = ref(0);

const updateSelectedTitle = (index) => {
    selectedTitle.value = index;
};
</script>

<style scoped>
.bread-title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #fff;
    padding: 0 20px;
    border-bottom: 1px solid #eee;
    
}

.bread-title {
    position: relative;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin: 50px;
}


.bread-title.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 25%;
    width: 50%;
    height: 2px;
    background-color: red;
}


.bread-title::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent; 
}
</style>

