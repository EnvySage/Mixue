<template>
    <div class="mask" @click="closeMask" v-if="showMask">
        <div class="cont" @click.stop>
             <div class="cont-header">
                <div class="select-all">
                    <input type="checkbox" v-model="selectAll" @change="toggleSelectAll"/>
                    <span>全选</span>
                </div>
                <div class="clear">
                    <div class="iconfont"></div>
                    <span @click="clearCar">清空购物车</span>
                </div>
            </div>
            <div class="productList" style="max-height: 280px; overflow-y: auto; overflow-x: hidden;">
                <div class="product" v-for="item in cartItems" :key="item.id">
                    <input type="checkbox" v-model="item.selected" @change="updateSelectAll"/>
                    <img :src="item.type === 'product' ? productStore.products[item.id-1].imageUrl : snackStore.snacks[item.id-101].imageUrl" style="width: 70px;height: 70px; border-radius: 50%;">
                    <div class="product-info" style="width: 45%;">
                        <div class="product-name">{{ item.type === 'product' ? productStore.products[item.id-1].name : snackStore.snacks[item.id-101].name }}</div>
                        <div class="product-desc" style="font-size: 10px; width: 70%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            {{ item.type === 'product' ? productStore.products[item.id-1].description : snackStore.snacks[item.id-101].description }}
                            <div v-if="item.selectedTemperature" style="margin-top: 5px;">温度: {{ item.selectedTemperature }}</div>
                            <div v-if="item.selectedSugar" style="margin-top: 2px;">糖度: {{ item.selectedSugar }}</div>
                            <div v-if="item.selectedExtras && item.selectedExtras.length > 0" style="margin-top: 2px;">
                                加料: {{ item.selectedExtras.join(',') }}
                            </div>
                        </div>
                        <div class="product-price">¥{{ item.price }}</div>
                    </div>
                    <div class="price">
                      <div class="nums">
                        <button @click="decrementQuantity(item)" style="background-color: transparent;">-</button>
                        <span class="num">{{ item.num }}</span>
                        <button @click="incrementQuantity(item)" style="background-color: #f40; color: white;">+</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="shop-car">
        <div class="logo" @click="CarDetail">
            <img src="../img/蜜雪冰城.png" alt="">
            <div class="quantity">{{ quan }}</div>
        </div>
        <div class="cal">
            <div class="total">合计:￥{{ sum }}</div>
            <button @click="FinishShop">结算</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useProductStore } from '@/stores/products';
import { useShopCar } from '@/stores/shopCar';
import { useOrderStore } from '@/stores/order';
import { useSnackStore } from '@/stores/snack';

const orderStore = useOrderStore();
const shopCar = useShopCar();
const productStore = useProductStore();
const snackStore = useSnackStore();

const cartItems = ref([]); // 合并商品和小吃的购物车列表

const showMask = ref(false);

const closeMask = () => {
    showMask.value = false;
};

const CarDetail = () => {
    showMask.value = true;
    cartItems.value = shopCar.getCartItems(); // 获取合并后的购物车列表
    console.log(cartItems.value);
};

const selectAll = ref(true);
onMounted(async () => {
    await productStore.getAll();
    await snackStore.getAll();
    cartItems.value = shopCar.getCartItems(); // 获取合并后的购物车列表
    toggleSelectAll();
});


const toggleSelectAll = () => {
    cartItems.value.forEach(item => {
        item.selected = selectAll.value;
    });
    selectAll.value = cartItems.value.every(item => item.selected);
};

const updateSelectAll = () => {
    selectAll.value = cartItems.value.every(item => item.selected);
};

const quan = computed(() => {
    return cartItems.value.reduce((total, item) => {
        return item.selected ? total + item.num : total;
    }, 0);
});

const sum = computed(() => {
    return cartItems.value.reduce((total, item) => {
        return item.selected ? total + (item.price || 0) * item.num : total;
    }, 0);
});

const FinishShop = () => {
    if (cartItems.value.length === 0) {
        snackStore.showSnack("购物车为空，请选择商品");
        return;
    }
    alert("结算成功");
    orderStore.createOrder(cartItems.value.filter(item => item.selected));
    shopCar.clearCart();
    cartItems.value = [];
};

const clearCar = () => {
    shopCar.clearCart();
    cartItems.value = [];
};

const decrementQuantity = (item) => {
    if (item.num > 1) {
        item.num--;
    } else {
        shopCar.removeCartItem(item.id, item.type);
    }
};
const incrementQuantity = (item) => {
    item.num++;
};
</script>

<style scoped>
.shop-car {
    position: fixed;
    bottom: 70px;
    height: 80px;
    width: 100%;
    background-color: #ffffff;
    z-index: 9999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e5e5e5;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
}
.logo{
    position: relative;
}
.logo img{
    width:80px;
    height:80px;
}
.logo .quantity{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ff6700;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
}
.cal{
    display: flex;
    flex-direction: row;
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
}
.cal button{
    background-color: red;
    border-radius: 10px;
    padding: 15px 30px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    font-weight: bold;
}
.mask{
    background-color:rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 997;
}
.cont{
    position: absolute;
    top: 50%;
    width: 100%;
    height: 50%;
    background-color: white;
}
.cont-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    border-bottom: 1px solid #e0e0e0;
}
.price {
  display: flex;
  justify-content: space-between;
}

.nums {
  display: flex;
  align-items: center;
  gap: 10px;

}

.nums button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #f40;
}

.product{
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #e0e0e0;
}
</style>
