<template>
    <div class="list-view-layout">
        <breadTitle class="bread-title-container"></breadTitle>
        <RouterView></RouterView>

    </div>
    <MainNav></MainNav>
</template>

<script setup>
import Listall from '@/components/ListComponents/listall.vue';
import MainNav from '../components/MainNav.vue'
 import breadTitle from '@/components/ListComponents/breadTitle.vue';

</script>

<style scoped>
.list-view-layout {
    width: 100%;
    height: 100vh;
    background-color: rgb(250, 247, 247);
}
</style>
