<template>
    <div>
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
*{
    background-color: beige;
}
</style>