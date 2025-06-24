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
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const titleList = [
    { name: '经典菜单', url: '/Order/ClassicMenu', routeName: 'classicMenu' },
    { name: '0元兑零食', url: '/Order/zeroExchange', routeName: 'zeroExchange' },
    { name: '双杯9.9起', url: '/Order/double99', routeName: 'double99' },
    { name: '我的常点', url: '/Order/commonOrder', routeName: 'commonOrder' }
]

const selectedTitle = ref(0)

// 监听路由变化
watch(
    () => route.name,
    (newRouteName) => {
        const index = titleList.findIndex(item => item.routeName === newRouteName)
        if (index !== -1) {
            selectedTitle.value = index
        }
    },
    { immediate: true } // 立即执行一次，确保初始化时也能正确设置
)

const updateSelectedTitle = (index) => {
    selectedTitle.value = index
}
</script>

<style scoped>
.bread-title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
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
    margin-right: 10px; /* 添加间距以便标题之间有间隔 */
}

.bread-title.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
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
