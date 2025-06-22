<template>
  <div class="listall">
    <list
      v-for="(order, index) in orders"
      :key="index"
      :order="order"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import list from '@/components/ListComponents/list.vue';

const orders = ref([
  {
    date: '2025-04-09',
    time: '16:02:15',
    status: '已完成',
    images: ['https://example.com/image1.jpg'],
    quantity: 1,
    totalPrice: 4,
  },
  {
    date: '2025-03-15',
    time: '20:53:31',
    status: '已完成',
    images: ['https://example.com/image2.jpg'],
    quantity: 1,
    totalPrice: 6,
  },
]);
</script>
<style scoped>

</style>