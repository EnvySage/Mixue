<template>

  <div class="body" v-if="!loading">
    <div class="back-button">
      <button @click="goBack">返回</button>
    </div>

    <!-- 其他页面内容保持不变 -->
    <div class="header-container">
      <div class="header-content">
        <div class="order-status">
          <p class="status-title">订单已完成 取餐码：2839</p>
          <p class="status-message">订单已完成，祝您用餐愉快</p>
        </div>
        <div class="snowman-icon">
          <!-- 右侧雪人图案 -->
        </div>
      </div>
    </div>

    <!-- 中间模块 -->
    <div class="main-content">
      <!-- 加店长领30元券包模块 -->
      <div class="join-group-module">
        <div class="text-section">
          <p class="join-group-title">加店长进群领 <span class="highlight">30元券包</span></p>
          <p class="join-group-desc">周周领福利 抽雪王周边</p>
          <button class="scan-button">长按识别二维码 →</button>
        </div>
        <div class="qr-code-section">
          <img src="/src/img/list/list1.jpg" alt="二维码" />
        </div>
      </div>

      <!-- 获得雪王币模块 -->
      <div class="coin-module">
        <div class="text-content">
          <div class="text-content-container">
            <p class="coin-text">本单可获得 <span class="highlight">40雪王币</span></p>
            <a href="#" class="draw-prize">抽雪王周边 ></a>
          </div>
        </div>
      </div>

      <!-- 店铺及商品详情 -->
      <div class="store-info-module">
        <div class="store-info">
          <div class="store-info-top">
            <p class="store-name">蜜雪冰城(星河城市广场店) ></p>
            <p class="store-address">直线距离1.6km | 广东省东莞市市辖区麻涌镇建设路43号星河城市广场EX-XH-1205/06/07</p>
          </div>
        </div>
        <!-- 商品详情 -->
        <div class="product-info" v-for="(o,index) in order.items" :key="index">
          <div class="product-image">
            <img :src="`${o.imgUrl}`" :alt="`商品图片`" />
          </div>
          <div class="product-details">
            <p class="product-name">{{ o.name }}</p>
            <p class="product-spec">{{ o.selectedSugar }}/{{
              o.selectedTemperature }}</p>
            <p class="product-quantity">x {{ o.num }}</p>
          </div>
          <div class="product-price">
            <p class="price">共{{ quantity() }}件，合计 <span class="highlight">¥{{ price() }}</span></p>
          </div>
        </div>
      </div>

      <!-- 底部广告模块 -->
      <div class="ad-module">
        <Advertisement></Advertisement>
      </div>

      <!-- 订单详情 -->
      <div class="order-details">
        <table>
          <tbody>
            <tr>
              <td>下单时间</td>
              <td>2025-04-09 16:02:15</td>
            </tr>
            <tr>
              <td>订单编号</td>
              <td>
                {{ orderId }}
              </td>
            </tr>
            <tr>
              <td>取餐号码</td>
              <td>2839</td>
            </tr>
            <tr>
              <td>是否打包</td>
              <td>要打包袋</td>
            </tr>
            <tr>
              <td>备注</td>
              <td>无</td>
            </tr>
            <tr>
              <td>门店编码</td>
              <td>914455</td>
            </tr>
          </tbody>
        </table>
        <p class="contact-message">如有售后或退款问题，请联系门店</p>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="footer-button">
      <button class="redo-order-button">完成订单</button>
    </div>
  </div>
  <div v-else>加载中...</div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useOrderStore } from '@/stores/order';
import Advertisement from '../MainComponents/Advertisement.vue';

const router = useRouter();
const route = useRoute();
const OrderStore = useOrderStore();
const orderId = Number(route.params.id);
const order = ref({});
const loading = ref(true);

onMounted(async () => {
  try {
    order.value = await OrderStore.getOrderById(orderId);
    console.log(order.value);
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
});
// 动态设置时间
const formattedTime = ref(new Date().toLocaleString()); // 使用当前时间

const goBack = () => {
  // 跳转到 listall 页面
  router.push({ name: 'listall' });
};

const quantity= ()=>{
  let totalNum = 0;
  order.value.items.forEach(item => {
    totalNum += item.num;
  });
    return totalNum;
};
const price= ()=>{
  let totalprice = 0;
  order.value.items.forEach(item => {
    totalprice += item.price;
  });
    return totalprice;
};



// const getTotalNum = (order) => {
//   if (!order || !Array.isArray(order.items)) {
//     return 0; // 如果订单无效，返回 0
//   }

//   let totalNum = 0;

//   // 遍历每个 item，并累加 num 值
//   order.items.forEach(item => {
//     totalNum += item.num || 0; // 如果 num 不存在，避免报错，使用 0
//   });

//   return totalNum;
// };
// const getTotaprice = (order) => {
//   if (!order || !Array.isArray(order.items)) {
//     return 0; // 如果订单无效，返回 0
//   }

//   let totalprice = 0;

//   // 遍历每个 item，并累加 num 值
//   order.items.forEach(item => {
//     totalprice += item.price || 0; // 如果 num 不存在，避免报错，使用 0
//   });

//   return totalprice;
// };






</script>

<style scoped>
.body {
  overflow-x: hidden;
}

/* 返回按钮样式 */
.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
}

.back-button button {
  background-color: #ff453a;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

/* 全局样式 */
.header-container {
  width: 430px;
  background-color: #ff453a;
  /* 红色背景 */
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.order-status {
  flex: 1;
}

.status-title {
  font-size: 18px;
  font-weight: bold;
}

.status-message {
  font-size: 14px;
}

.qr-code-section img {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}

.main-content {
  width: 430px;
  background-color: #fff;
  padding: 20px;

}

.join-group-module {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
}

.join-group-title {
  font-size: 16px;
  font-weight: bold;
}

.highlight {
  color: red;
}

.join-group-desc {
  font-size: 12px;
}

.scan-button {
  background-color: #ff453a;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
}

.coin-module {

  display: flex;
  width: 380px;
  align-items: center;
  background-color: #ffefe0;
  padding: 0px 10px;
  border-radius: 8px;

}

.text-content {
  flex: 1;
}

.text-content-container {
  display: flex;
  justify-content: space-between;
  /* 让两端元素左右对齐 */
  align-items: center;
  margin-right: 50px;
}

.coin-text {
  font-size: 14px;
  font-weight: bold;
}

.draw-prize {
  font-size: 12px;
  font-weight: bold;
  color: #ff453a;
  text-decoration: none;
}


.store-info-module {
  background-color: #fff;
  padding: 20px;
  margin-right: 50px;
}

.store-info {
  display: flex;
  flex-direction: column;
  /* 声明为纵向布局 */
  align-items: flex-start;
  /* 对齐方式设置为左对齐 */
  margin-bottom: 20px;
}

.store-info-top {
  display: flex;
  flex-direction: column;
  /* 确保店名和地址垂直排列 */
}

.store-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  /* 添加一些间距，避免紧密靠在一起 */
}

.store-address {
  font-size: 12px;
}



.product-info {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

}

.product-image>img {
  width: 80px;
  height: 80px;
}

.product-details {
  flex: 1;
  margin-left: 20px;
}

.product-name {
  font-size: 14px;
  font-weight: bold;
}

.product-spec {
  font-size: 12px;
}

.product-quantity {
  font-size: 12px;
}

.product-price {
  position: absolute;
  text-align: right;
  right: 0;
  bottom: 0;
}

.price {
  font-size: 14px;
  font-weight: bold;
}

.ad-module {
  width: 100%;
  height: 16 0px;
  overflow: hidden;
}

::v-deep(.page-content) {
  padding: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
}

::v-deep(.sweet-news-title) {
  display: none;
  /* 隐藏标题 */
}

::v-deep(.sweet-news-container) {
  padding: 0;
  width: 400px;
  height: 100px;
  overflow: hidden;
}

.order-details {
  background-color: #fff;
  padding: 20px;
  margin-left: 10px;
}

.order-details table {
  width: 100%;
  border-collapse: collapse;
}

.order-details td {
  padding: 10px 15px;
  font-size: 12px;
  border-bottom: 1px solid #ddd;
}


.contact-message {
  font-size: 12px;
  margin-top: 10px;
}

.footer-button {
  text-align: right;
  padding: 20px;
}

.redo-order-button {
  background-color: #ff453a;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
}
</style>
