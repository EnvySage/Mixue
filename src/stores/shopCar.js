import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useShopCar = defineStore('shopCar', () => {
  const cart = ref([]);
  const addToCart=(id, num) =>{
    if (cart.value.some(item => item.id === id)) {
      cart.value.find(item => item.id === id).num += num;
    } else {
      cart.value.push({ id, num });
    }
    console.log(cart.value);
  }

  const getCart=()=> {
    return cart.value;
  }

  const clearCart=()=> {
    cart.value = [];
  }
  return {
    cart,
    addToCart,
    getCart,
    clearCart
  }
})
