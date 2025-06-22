<template>
    <div class="product-card">
      <img :src="`${props.double.imageUrl}`" alt="小吃" />
      <div class="product-info">
        <span class="product-title">{{ props.double.name }}</span>
        <span class="product-desc">{{ props.double.description }}</span>
        <div class="product-price">¥{{ props.double.price }}</div>
      </div>
      <div class="add-button">+</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  double: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* 商品卡片 */
.product-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 185px;
}


.product-card img {
  width: 100%;
  height: auto;
}


.product-info {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.product-subtitle {
  font-size: 12px;
  color: #ff5722; /* 红色 */
}

.product-desc {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.product-price {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
}


.add-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #ff5722; 
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
}
</style>