<template>
    <div class="order-item" @click="handleOrderClick">
    <!-- 自提和店铺名称 -->
    <div class="pickup-info">
      <span class="pickup">自提</span>
      <span class="shop-name">蜜雪冰城 &gt;</span>
    </div>

    <!-- 已完成状态 -->
    <span class="status">已完成</span>

    <!-- 商品图片 -->
    <div class="product-images">
      <img v-for="img in order.images" :src="img" :alt="`商品图片`" />
    </div>

    <!-- 日期和时间 -->
    <div class="date-time-container">
      <span class="order-date">{{ order.date }}</span>
      <span class="preparation-time">{{ order.time }}</span>
    </div>

    <!-- 商品价格和数量 -->
    <div class="order-summary">
      <span class="total-price">共{{ order.quantity }}件 ¥{{ order.totalPrice }}</span>
    </div>

    <!-- 操作按钮 -->
    <button class="reorder-btn">再来一单</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  order: {
    type: Object,
    required: true,
    default: () => ({
      date: '2025-04-09',
      time: '16:02:15',
      status: '已完成',
      images: ['https://example.com/image1.jpg'],
      quantity: 1,
      totalPrice: 4,
    }),
  },
});

const emit = defineEmits(['order-clicked']);

const handleOrderClick = () => {
  emit('order-clicked', props.order);
};
</script>

<style scoped>
/* 订单框样式 */
.order-item {
    height: 150px;
  background-color: #fff;
  padding: 16px;
  position: relative; /* 使按钮相对订单项定位 */
  border-bottom: 1px solid #e0e0e0;
  margin: 50px 0px; /* 订单之间间距 */
  border-radius: 10px; /* 订单框圆角 */
}

/* 自提和店铺信息 */
.pickup-info {
  display: flex;
  align-items: center;
  margin-bottom: 8px; /* 与商品图片保持一定间距 */
}

.pickup-info .pickup {
  color: red; /* 自提文字为红色 */
  margin-right: 8px; /* 与店铺名称保持间距 */
}

.pickup-info .shop-name {
  color: #333; /* 店铺名称颜色为灰色 */
}

/* 已完成状态 */
.status {
  position: absolute;
  top: 16px;
  right: 16px;
  color: #888; /* 灰色字体 */
  font-size: 12px;
  font-weight: bold;
}

/* 商品图片 */
.product-images {
  margin-top: 16px;
  display: flex;
  gap: 8px;
}

.product-images img {
  width: 60px;
  height: 60px;
  border-radius: 4px;
}

/* 日期和时间容器 */
.date-time-container {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 靠左对齐 */
  margin-top: 8px; /* 与商品图片保持一定间距 */
}

/* 商品价格和数量 */
.order-summary {
  display: flex;
  position: absolute;
  right: 10px; /* 将内容靠右对齐 */
  align-items: center;
  top: 100px;
  color: #333;
}

.order-summary span.total-price {
  font-size: 14px;
  font-weight: bold;
}

/* 操作按钮 */
.reorder-btn {
  position: absolute;
  display: block;
  text-align: center;
  bottom: 20px;
  right: 10px;
  padding: 8px 16px;
  background-color: #fff;
  color: red;
  border: 1px solid red;
  border-radius: 4px;
  cursor: pointer;
}
</style>
