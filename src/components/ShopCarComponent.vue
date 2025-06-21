<template>
    <div class="mask"  @click="closeMask" v-if="showMask">
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
            <div class="productList" style="max-height: 200px; overflow-y: auto; overflow-x: hidden;">
                <div class="product" v-for="item in productList" :key="item.id">
                    <input type="checkbox"  v-model="item.selected" @change="updateSelectAll">
                    <img :src="productStore.products[item.id-1].imageUrl" style="width: 70px;height: 70px; border-radius: 50%;">
                    <div class="product-info" style="width: 45%;">
                        <div class="product-name" style="">{{ productStore.products[item.id-1].name }}</div>
                        <div class="product-desc" style="font-size: 10px; width: 70%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ productStore.products[item.id].description }}</div>
                        <div class="product-price">¥{{ productStore.products[item.id-1].price }}</div>
                    </div>
                    <div class="price">
                      <div class="nums">
                        <button @click="item.num > 1 ? item.num-- : ''" style="background-color: transparent;">-</button>
                        <span class="num">{{ item.num }}</span>
                        <button @click="item.num++" style="background-color: #f40; color: white; ">+</button>
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
import { ref,onMounted,computed } from 'vue';
import { useProductStore } from '@/stores/products';
import { useShopCar } from '@/stores/shopCar';
import { useOrderStore } from '@/stores/order';
const orderStore = useOrderStore();
const shopCar = useShopCar();
const productStore = useProductStore();
const productList = ref([]);

const showMask = ref(false);
const closeMask = () => {
    showMask.value = false;
};
const CarDetail = () => {
    showMask.value = true;
    productList.value = shopCar.getCart();
    getdata();
    console.log(productList.value);
};
const selectAll = ref(true);
onMounted(async() => {
    await productStore.getAll();
    productList.value = shopCar.getCart();
    getdata();
});
const getdata = () => {
  productList.value = shopCar.getCart().map(item => {
    return { ...item, selected: true }; 
  });
};
const quan = computed(() => {
    let total = 0;
    for (let i = 0; i < productList.value.length; i++) {
      if(productList.value[i].selected){
        total += productList.value[i].num;
      }
    }
    return total;
});
const sum = computed(() => {
    let total = 0;
    for (let i = 0; i < productList.value.length; i++) {
      if(productList.value[i].selected){
        total += productList.value[i].num * productStore.products[productList.value[i].id-1].price;
      }
    }
    return total;
});
const toggleSelectAll = () => {
  productList.value.forEach(item => {
    item.selected = selectAll.value;
  });
};

const updateSelectAll = () => {
  selectAll.value = productList.value.every(item => item.selected);
};
const FinishShop = () => {
  alert("结算成功");
  orderStore.createOrder(productList.value.filter(item => item.selected));
  shopCar.clearCart();
  productList.value = [];
  getdata();
};
const clearCar = () => {
    shopCar.clearCart();
    productList.value = [];
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