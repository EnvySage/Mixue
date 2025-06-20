<template>
    <div class="scroll-container">
        <div class="header">
            <TopBar class="top-bar"></TopBar>
            <destinationCard class="destination-card"></destinationCard>
            <breadTitle class="bread-title-container"></breadTitle>
        </div>
        <div class="scroll">
            <router-view class="order-view"></router-view>
        </div>
    </div>
</template>

<script setup>
import breadTitle from '@/components/OrderComponents/breadTitle.vue';
import TopBar from '@/components/OrderComponents/TopBar.vue';
import destinationCard from '@/components/OrderComponents/destinationCard.vue';
</script>

<style scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.order-view{
    width: 100%;
    height: 100%;
}
.scroll-container{
    height: 100vh;
    overflow: hidden;
}
.scroll{
    position: absolute;
    top:300px;
    bottom: 0;
    overflow: hidden;
}
</style>