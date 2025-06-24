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
      <img  v-for="img in props.order.items" :alt="`商品图片`" :key="img.id"  :src="img.imgUrl"/>
    </div>

    <!-- 日期和时间 -->
    <div class="date-time-container">
      <span class="preparation-time">{{ formattedTime }}</span>
    </div>

    <!-- 商品价格和数量 -->
    <div class="order-summary">
      <span class="total-price">共{{ quantity() }}件 ¥{{ props.totalPrice}}</span>
    </div>

    <!-- 操作按钮 -->
  </div>
  <div class="button"> 
    <button class="reorder-btn" @click="handleButtonClick">再来一单</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/products';
import { useSnackStore } from '@/stores/snack';
import { useShopCar } from '@/stores/shopCar';

const props = defineProps({
  order: {
    type: Object,
    required: true,
  },
totalPrice:{
  type:Number,
  required:true,
}
});
console.log(props.totalPrice)
const emit = defineEmits(['order-clicked']);
const router = useRouter();
const productStore = useProductStore();
const snackStore = useSnackStore();
const shopCar = useShopCar();

const handleOrderClick=()=>{
  router.push({ name: 'listdetail', params: { id: props.order.id } });
};


// 动态设置时间
const formattedTime = ref(new Date().toLocaleString()); // 使用当前时间


const quantity= ()=>{
  let totalNum = 0;
  props.order.items.forEach(item => {
    totalNum += item.num;
  });
    return totalNum;
};

const handleButtonClick = () => {
  console.log('用户点击了“添加内容”');
  // 在实际项目中，可以跳转到添加内容的页面，例如：
  // router.push('/add-content');
  router.push({ name: 'OrderView'});
};
// const handleOrderClick = async () => {
//   if (props.order.type === 'product') {
//     productDetails = await productStore.getById(props.order.id);
//   } else if (props.order.type === 'snack') {
//     productDetails = await snackStore.getById(props.order.id);
//   }

//   if (productDetails) {
//     // 更新订单数据
//     props.order.productDetails = productDetails;
//     console.log('更新后的订单数据：', props.order);
//   }

//   emit('order-clicked', props.order); // 使用 order.id 作为参数

//   // 跳转到详细页面
//   router.push({ name: 'listdetail', params: { orderId: props.order.id } });
// };
</script>

<style scoped>
/* 订单框样式 */
.order-item {
  height: 150px;
  background-color: #fff;
  padding: 16px;
  position: relative; /* 使按钮相对订单项定位 */
  border-bottom: 1px solid #e0e0e0;
  margin: 50px 8px; /* 订单之间间距 */
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

/* 按钮容器 */
.button {
  position: relative;
  margin-top: -30px;
}

/* 操作按钮 */
.reorder-btn {
  position: absolute;
  right: 15px;
  bottom: 30px;
  padding: 8px 16px;
  background-color: #fff;
  color: red;
  border: 1px solid red;
  border-radius: 4px;
  cursor: pointer;
}
</style>
