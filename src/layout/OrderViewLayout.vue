<template>
    <breadTitle class="bread-title-container"></breadTitle>
    <router-view></router-view>
</template>

<script setup>
import breadTitle from '@/components/OrderComponents/breadTitle.vue';
</script>

<style scoped>
.bread-title-container {
    margin-bottom: 15px;
}
</style>