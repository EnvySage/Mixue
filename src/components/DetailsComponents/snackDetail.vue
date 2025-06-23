<template>
  <div class="details-page" v-if="!loading">
    <div class="back-button" @click="goBack">
      <div class="iconfont icon-fanhui"></div>
    </div>

    <!-- 顶部图片 -->
    <div class="product-image">
      <img :src="`${snack.imageUrl}`" alt="产品图片" />
    </div>

    <div class="product-header">
      <h2>{{ snack.name }}</h2>
      <div class="favorite" @click="toggleFavorite">
        <span class="star-icon" :class="{ filled: isFavorite }">★</span>
        <span>收藏口味</span>
      </div>
    </div>

    <!-- 商品详情 -->
    <div class="product-details">
      <h3>商品详情</h3>
      <div class="detail-content">{{ snack.description }}</div>
    </div>

    <!-- 底部操作栏 -->
    <div class="bottom-bar">
      <div class="price-info">
        <span class="current-price">¥{{ snack.price * quantity }}</span>
        <span class="original-price">¥{{ (snack.price*quantity * 1.2).toFixed(1) }}</span>
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
import { useSnackStore } from "@/stores/snack";
import { useShopCar } from "@/stores/shopCar";
import { useOrderStore } from "@/stores/order"; // 添加 orderStore 导入

const snackStore = useSnackStore();
const shopcarStore = useShopCar();

const route = useRoute();

const isFavorite = ref(false);
const quantity = ref(1);
const loading = ref(true);

const id = route.params.id;

const snack = ref(null);

onMounted(async () => {
  try {
    // 获取小吃详情
    await snackStore.getById(id);
    snack.value = snackStore.snack;
    console.log(snack.value); // 添加调试信息
    if (!snack.value) {
      console.error("未能获取到小吃数据");
    }
  } catch (error) {
    console.error("获取小吃详情时出错", error);
  } finally {
    loading.value = false;
  }
});

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const addCart = async () => {
  if (snack.value) {
    // 确保获取最新商品数据
    const fullSnack = await snackStore.getById(snack.value.productId);
    
    const cartItem = {
      ...fullSnack,
      id: fullSnack.productId,
      type: 'snack',
      num: quantity.value,
      price: fullSnack.price * quantity.value
    };
    
    shopcarStore.addToCart(cartItem);
  }
  alert("加入购物车成功");
  history.back();
};

const buyNow = async () => {
  if (snack.value) {
    // 创建订单项
    const fullSnack = await snackStore.getById(snack.value.productId);
    
    const orderItem = {
      id: fullSnack.productId,
      name: fullSnack.name,
      imgUrl: fullSnack.imageUrl,
      type: 'snack',
      num: quantity.value,
      price: fullSnack.price * quantity.value
    };

    // 创建订单
    const orderStore = useOrderStore();
    await orderStore.createOrder([orderItem]);
    
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
