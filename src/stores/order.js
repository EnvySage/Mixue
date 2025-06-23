// src/stores/order.js
import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useProductStore } from '../stores/products';
import { useSnackStore } from '../stores/snack';

export const useOrderStore = defineStore('orders', () => {
  const orders = ref([]);
  const currentOrderId = ref(0); // 初始化订单ID计数器

  const currentOrder = ref({ id: null, items: [] });

  const calculateTotalPrice = (cartItems) => {
    let total = 0;
    for (const item of cartItems) {
      if (item.price) {
        total += item.price;
      }
    }
    return total;
  };

  const createOrder = async (cartItems) => {
    if (!cartItems || !cartItems.length) {
      console.error('购物车为空，无法创建订单');
      return;
    }

    // 每次创建订单时，订单ID自增
    currentOrderId.value += 1;
    const orderId = currentOrderId.value;

    // 设置当前订单的条目列表和ID
    currentOrder.value.id = orderId;
    currentOrder.value.items = cartItems;

    // 添加订单到订单列表
    orders.value.push({ id: orderId, items: currentOrder.value.items });

    console.log('订单已创建：', currentOrder.value);

    return currentOrder.value;
  };

  const getAllOrders = () => {
    console.log('获取所有订单：', orders.value);
    return orders.value;
  };

  const getOrderById = (orderId) => {
    const order = orders.value.find(item => item.id === orderId);
    console.log('获取订单：', order);
    return order;
  };

  return {
    orders,
    currentOrder,
    createOrder,
    getAllOrders,
    getOrderById,
    calculateTotalPrice,
  };
});
