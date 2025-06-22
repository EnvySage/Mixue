// src/stores/shopCar.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useShopCar = defineStore('shopCar', () => {
  const cart = ref([]);

  const addToCart = (id, num, type) => {
    if (cart.value.some(item => item.id === id && item.type === type)) {
      cart.value.find(item => item.id === id && item.type === type).num += num;
    } else {
      cart.value.push({ id, num, type}); // 添加 type 和 selected 属性
    }
    console.log(cart.value);
  };

  const getCartItems = () => {
    return cart.value;
  };

  const clearCart = () => {
    cart.value = [];
  };
 const removeCartItem = (id, type) => {
    const itemIndex = cart.value.findIndex(item => item.id === id && item.type === type);
    if (itemIndex !== -1) {
      cart.value.splice(itemIndex, 1);
    }
    console.log(cart.value);
  };
  return {
    cart,
    addToCart,
    getCartItems,
    clearCart,
    removeCartItem
  };
});
