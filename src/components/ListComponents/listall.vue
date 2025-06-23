<template>
  <div class="listall">
    <list
      v-for="(order, index) in orders"
      :key="index"
      :order="order"
      :totalPrice="orderStore.calculateTotalPrice(order.items)"
      @order-clicked="navigateToDetail(order)"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore } from '@/stores/order.js'; 
import list from '@/components/ListComponents/list.vue';

const router = useRouter();
const orderStore = useOrderStore();
const orders = ref([]);


onMounted(async() => {
    orders.value = orderStore.getAllOrders();
    console.log('获取到的订单数据：', orders.value); // 添加日志

});

const navigateToDetail = (order) => {
  router.push({ name: 'listdetail', params: { orderId: order.id } }); // 使用 order.id 作为参数
};
</script>

<style scoped>
/* 你的样式 */
</style>
