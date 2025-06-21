<template>
  <div class="details-page">
    <div v-if="isLoading">加载中...</div>
    <div v-else>
      <!-- 返回按钮 -->
      <div class="back-button" @click="goBack">
        <i class="back-icon">←</i>
      </div>

      <!-- 顶部图片 -->
      <div class="product-image">
        <img :src="`https://glpla.github.io/utils${currentGood.img}`" alt="产品图片">
      </div>

      <!-- 产品信息和收藏 -->
      <div class="product-header">
        <h2>{{ product.name }}</h2>
        <div class="favorite" @click="toggleFavorite">
          <span class="star-icon" :class="{ 'filled': isFavorite }">★</span>
          <span>收藏口味{{ route.params.id }}</span>
        </div>
      </div>

      <!-- 规格选择 -->
      <div class="specifications">
        <div class="spec-group" v-for="spec in currentGood.specification" :key="spec.id">
          <div class="spec-label">{{ spec.label }}</div>
          <div class="spec-options">
             <button
              v-for="option in temperature"
              :key="option.name"
              :class="['spec-option', { 'active': option.default }]"
              @click="selectTemperature(option)"
            >
              {{ option.name }}
            </button>
          </div>
        </div>
      </div>

      <!-- 商品详情 -->
      <div class="product-details">
        <h3>商品详情</h3>
        <div class="detail-content" v-html="currentGood.desc"></div>
      </div>

      <!-- 底部操作栏 -->
      <div class="bottom-bar">
        <div class="price-info">
          <span class="current-price">¥{{ currentGood.price }}</span>
          <span class="original-price">¥{{ currentGood.price_original }}</span>
        </div>
        <div class="quantity-selector">
          <button class="quantity-btn" @click="quantity > 1 && quantity--">-</button>
          <span class="quantity">{{ quantity }}</span>
          <button class="quantity-btn" @click="quantity++">+</button>
        </div>
        <div class="action-buttons">
          <button class="buy-now-btn" @click="buyNow">立即购买</button>
          <button class="add-cart-btn" @click="addToCart">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {useRoute} from 'vue-router';
import { useProductStore } from '@/stores/products';
const productStore = useProductStore();

const route = useRoute();
const currentGood = ref(null);
const isFavorite = ref(false);
const quantity = ref(1);
const isLoading = ref(true);

// 直接定义要展示的商品数据
const currentGoodData = {
  id: 0,
  title: "美式咖啡(升级版)",
  desc: "纯正美式，浓郁香气<br>主辅料：鲜萃咖啡液<br><br>【杯型容量】中杯 505mL<br>【杯型容量】即杯容量，为预估出餐量参考数据，非实际含量。<br>为避免饮品过满无法封杯或撒漏，可能存在不完全满杯情况，实际含量请以门店出餐为准。<br>注：杯型容量数据基于相关国家标准存在合理偏差。",
  img: "/coffee/coffee0.jpg",
  price_original: 5,
  price: 5,
  specification: [
    {
      id: 101,
      label: "温度",
      name: "ther",
      options: [
        { id: 0, label: "正常冰", value: "正常冰", sel: true },
        { id: 1, label: "少冰", value: "少冰", sel: false },
        { id: 2, label: "热", value: "热", sel: false }
      ]
    },
    {
      id: 102,
      label: "糖度",
      name: "sugar",
      options: [
        { id: 0, label: "正常糖", value: "正常糖", sel: true },
        { id: 1, label: "七分糖", value: "七分糖", sel: false },
        { id: 2, label: "五分糖", value: "五分糖", sel: false },
        { id: 3, label: "三分糖", value: "三分糖", sel: false },
        { id: 4, label: "无糖", value: "无糖", sel: false }
      ]
    }
  ],
};
const id = route.params.id;
const temperature = ref([]);

const product =ref();
console.log(product)
onMounted(async () => {
  // 获取商品详情
  await productStore.getById(id);   
  product.value=productStore.product
 temperature.value = product.value.options.temperature
console.log(product.value.options.temperature)
// console.log(temperature)

  isLoading.value = true;
  try {
    currentGood.value = currentGoodData;
    if (!currentGood.value) {
      console.error('商品数据不存在');
    }
  } catch (error) {
    console.error('获取商品详情失败:', error);
  } finally {
    isLoading.value = false;
  }
});




const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const selectSpec = (specName, option) => {
  const spec = currentGood.value.specification.find(spec => spec.name === specName);
  spec.options.forEach(opt => { opt.sel = opt.id === option.id; });
};

const addToCart = () => {
  if (!currentGood.value) return;
  console.log('商品已添加到购物车');
};

const buyNow = () => {
  if (!currentGood.value) return;
  console.log('立即购买');
};

const goBack = () => {
  history.back();
};
</script>

<style scoped>
.details-page {
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  background-color: #f7f7f7;
  min-height: 100vh;
}

/* 返回按钮 */
.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
}

.back-icon {
  font-size: 20px;
  color: #333;
}

/* 顶部图片 */
.product-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-color: #eee;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 产品标题和收藏 */
.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff;
}

.product-header h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 500;
}

.favorite {
  display: flex;
  align-items: center;
  color: #999;
  font-size: 14px;
}

.star-icon {
  margin-right: 5px;
  color: #ddd;
}

.star-icon.filled {
  color: gold;
}

/* 规格选择 */
.specifications {
  padding: 15px;
  background-color: #fff;
  margin: 10px 0;
}

.spec-group {
  margin-bottom: 15px;
}

.spec-label {
  font-size: 16px;
  margin-bottom: 8px;
}

.spec-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.spec-option {
  padding: 6px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: #fff;
  font-size: 14px;
  color: #333;
}

.spec-option.active {
  border-color: #ff4d4f;
  color: #ff4d4f;
}

/* 商品详情 */
.product-details {
  padding: 15px;
  background-color: #fff;
  margin: 10px 0;
}

.product-details h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
  color: #666;
}

.detail-content {
  line-height: 1.6;
  color: #333;
}

.detail-content p {
  margin: 10px 0;
}

/* 底部操作栏 */
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 12px 15px;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.price-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 15px;
}

.current-price {
  font-size: 20px;
  font-weight: bold;
  color: #ff4d4f;
}

.original-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.quantity-selector {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 15px;
  width: 100px;
}

.quantity-btn {
  width: 25px;
  height: 25px;
  border: none;
  background: none;
  font-size: 16px;
  color: #666;
}

.quantity {
  padding: 0 10px;
  min-width: 20px;
  text-align: center;
  font-size: 14px;
}

.action-buttons {
  display: flex;
  gap: 10px;
  margin-left: auto;
}

.buy-now-btn, .add-cart-btn {
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

.buy-now-btn {
  background-color: #ff4d4f;
  color: white;
}

.add-cart-btn {
  background-color: #f5f5f5;
  color: #333;
}
</style>






