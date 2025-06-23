<template>
  <div class="details-page" v-if="!loading">
    <div class="back-button" @click="goBack">
      <div class="iconfont icon-fanhui"></div>
    </div>

    <!-- 顶部图片 -->
    <div class="product-image">
      <img :src="`${product.imageUrl}`" alt="产品图片" />
    </div>

    <div class="product-header">
      <h2>{{ product.name }}</h2>
      <div class="favorite" @click="toggleFavorite">
        <span class="star-icon" :class="{ filled: isFavorite }">★</span>
        <span>收藏口味</span>
      </div>
    </div>

    <!-- 温度选择 -->
    <div class="spec-group">
      <div class="spec-label">温度</div>
      <div class="spec-options">
        <button
          v-for="option in temperature"
          :key="option.name"
          :class="['spec-option', { active: option.default }]"
          @click="selectTemperature(option)"
        >
          {{ option.name }}
        </button>
      </div>
    </div>

    <!-- 甜度选择 -->
    <div class="spec-group">
      <div class="spec-label">糖度</div>
      <div class="spec-options">
        <button
          v-for="option in sugar"
          :key="option.name"
          :class="['spec-option', { active: option.default }]"
          @click="selectSugar(option)"
        >
          {{ option.name }}
        </button>
      </div>
    </div>

    <!-- 加料选择 -->
    <div class="spec-group">
      <div class="spec-label">加料</div>
      <div class="extras-list">
        <div
          v-for="option in extras"
          :key="option.name"
          class="extra-option"
          @click="selectExtras(option)"
        >
          <span>{{ option.name }}（¥{{ option.price }}）</span>
          <span v-if="option.selected" class="selected-icon">✔</span>
        </div>
      </div>
    </div>

    <!-- 商品详情 -->
    <div class="product-details">
      <h3>商品详情</h3>
      <div class="detail-content">{{ product.description }}</div>
    </div>

    <!-- 底部操作栏 -->
    <div class="bottom-bar">
      <div class="price-info">
        <span class="current-price">¥{{ product.price*quantity }}</span>
        <span class="original-price">¥{{ (product.price*quantity * 1.2).toFixed(1) }}</span>
      </div>
      <div class="quantity-selector">
        <button class="quantity-btn" @click="quantity > 1 && quantity--">-</button>
        <span class="quantity">{{ quantity }}</span>
        <button class="quantity-btn" @click="quantity++">+</button>
      </div>
      <div class="action-buttons">
        <button class="buy-now-btn" @click="buyNow">立即购买</button>
        <button class="add-cart-btn" @click="addCart">加入购物车</button>
      </div>
    </div>
  </div>
  <div v-else>加载中...</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/products";
import { useShopCar } from "@/stores/shopCar";
import { useSnackStore } from "@/stores/snack";
import { useOrderStore } from "@/stores/order"; // 添加 orderStore 导入

const productStore = useProductStore();
const shopcarStore = useShopCar();
const snackStore = useSnackStore(); // 添加 snackStore

const route = useRoute();

const isFavorite = ref(false);
const quantity = ref(1);
const loading = ref(true);

const id = route.params.id;
const temperature = ref([]);
const sugar = ref([]);
const extras = ref([]);

const product = ref(null);
const snack = ref(null); // 添加 snack 变量

onMounted(async () => {
  try {
    // 获取商品详情
    await productStore.getById(id);
    product.value = productStore.product;
    console.log(product.value); // 添加调试信息

    if (product.value) {
      temperature.value = product.value.options.temperature;
      sugar.value = product.value.options.sugar;
      extras.value = product.value.options.extras;
    } else {
      console.error("未能获取到商品数据");
    }
  } catch (error) {
    console.error("获取商品详情时出错", error);
  } finally {
    loading.value = false;
  }
});

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const selectTemperature = (option) => {
  temperature.value.forEach((opt) => {
    opt.default = opt.name === option.name;
  });
};

const selectSugar = (option) => {
  sugar.value.forEach((opt) => {
    opt.default = opt.name === option.name;
  });
};

const selectExtras = (option) => {
  option.selected = !option.selected;
};

const addCart = async () => {
  if (product.value) {
    const fullProduct = await productStore.getById(product.value.productId);
    const selectedTemperature = temperature.value.find(t => t.default);
    const selectedSugar = sugar.value.find(s => s.default);
    const selectedExtras = extras.value.filter(e => e.selected);
    const cartItem = {
      id: fullProduct.productId,
      name: fullProduct.name,
      imgUrl: fullProduct.imageUrl,
      type: 'product',
      num: quantity.value,
      selectedTemperature: selectedTemperature?.name || '',
      selectedSugar: selectedSugar?.name || '',
      selectedExtras: selectedExtras.map(e => e.name),
      price: fullProduct.price * quantity.value
    };
    shopcarStore.addToCart(cartItem);
  }
  alert("加入购物车成功");
  history.back();
};

const buyNow = async () => {
  if (product.value) {
    // 创建订单项
    const fullProduct = await productStore.getById(product.value.productId);
    
    const selectedTemperature = temperature.value.find(t => t.default);
    const selectedSugar = sugar.value.find(s => s.default);
    const selectedExtras = extras.value.filter(e => e.selected);
    
    const orderItem = {
      id: fullProduct.productId,
      name: fullProduct.name,
      imgUrl: fullProduct.imageUrl,
      type: 'product',
      num: quantity.value,
      selectedTemperature: selectedTemperature?.name || '',
      selectedSugar: selectedSugar?.name || '',
      selectedExtras: selectedExtras.map(e => e.name),
      price: fullProduct.price * quantity.value
    };

    // 创建订单
    const orderStore = useOrderStore();
    const order = await orderStore.createOrder([orderItem]);
    
    // 跳转到订单确认页
    history.back();
  }
};

const goBack = () => {
  history.back();
};
</script>

<style scoped>
.details-page {
  font-family: "PingFang SC", "Helvetica Neue", Arial, sans-serif;
  background-color: #f7f7f7;
  min-height: 100vh;
  margin-bottom: 100px;
}

/* 返回按钮 */
.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
}

.iconfont {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  font-size: 24px;
  padding: 10px;
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

/* 页面头部 */
.product-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
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
  cursor: pointer;
}

.star-icon {
  font-size: 18px;
  color: #333;
  margin-right: 5px;
}

/* 规格选择 */
.spec-group {
  padding: 15px;
  background-color: #fff;
  margin: 10px 0;
}

.spec-label {
  font-size: 16px;
  margin-bottom: 8px;
}

.spec-options {
  display: flex;
  gap: 10px;
}

.spec-option {
  padding: 6px 15px;
  border-radius: 20px;
  background-color: #f0f0f0;
  font-size: 14px;
  color: #333;
  border: 1px solid #ddd;
}

.spec-option.active {
  background-color: #ff4d4f;
  color: white;
}

/* 加料选择 */
.extras-list {
  margin-top: 10px;
}

.extra-option {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  font-size: 14px;
}

.add-extra-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ff4d4f;
  color: white;
  font-size: 18px;
  margin-left: auto;
  cursor: pointer;
}

.plus-icon {
  font-size: 18px;
  color: white;
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

.buy-now-btn,
.add-cart-btn {
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  background-color: #f5f5f5;
  color: #333;
}

.buy-now-btn {
  background-color: #ff4d4f;
  color: white;
}
</style>
