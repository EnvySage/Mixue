// src/stores/shopCar.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useShopCar = defineStore('shopCar', () => {
  const cart = ref([]);

  const addToCart = (product, num = 1) => {
    // 支持旧参数格式(id, num, type)或新格式(product对象)
    const item = typeof product === 'object' 
      ? { ...product, num: product.num || num }
      : { id: product, num, type: 'product' };
    
    const { id, type = 'product' } = item;
    
    const existingItem = cart.value.find(item => item.id === id && item.type === type);
    if (existingItem) {
      existingItem.num += item.num || 1;
    } else {
      cart.value.push(item);
    }
    console.log('购物车内容:', cart.value);
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
