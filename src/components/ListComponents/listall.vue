<template>
  <div class="listall">
    <list
      v-for="(order, index) in orders"
      :key="index"
      :order="order"
      @order-clicked="navigateToDetail(order)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import list from '@/components/ListComponents/list.vue';

const router = useRouter();

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

const navigateToDetail = (order) => {
  router.push({ name: 'listdetail', params: { orderId: order.date } });
};
</script>

<style scoped>

</style>
