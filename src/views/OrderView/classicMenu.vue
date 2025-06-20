<template>
    <div>
        
    </div>
</template>

<script setup>
import { useProductStore } from '@/stores/products';
import { onMounted } from 'vue';

const productStore = useProductStore();
onMounted(() => {
  productStore.getAll();
});

</script>

<style scoped>

</style>