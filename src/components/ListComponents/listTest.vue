<template>
  <div class="order-page">
    <!-- 顶部导航 -->
    <div class="order-header">
      <div class="back-btn">
        <i class="fas fa-chevron-left"></i>
      </div>
      <h2>订单详情</h2>
      <div class="share-btn">
        <i class="fas fa-share-alt"></i>
      </div>
    </div>
    
    <!-- 订单状态 -->
    <div class="order-status">
      <div class="status-icon">
        <i class="fas fa-check-circle"></i>
      </div>
      <div class="status-text">已完成</div>
      <div class="status-desc">感谢您的光临，欢迎下次再来</div>
    </div>
    
    <!-- 店铺信息 -->
    <div class="store-info">
      <div class="store-header">
        <div class="store-icon">
          <img src="https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="蜜雪冰城">
        </div>
        <div class="store-details">
          <h3>蜜雪冰城 (万达广场店)</h3>
          <div class="store-rating">
            <span>4.8分</span>
            <span>月售2000+</span>
          </div>
        </div>
        <div class="store-phone">
          <i class="fas fa-phone-alt"></i>
        </div>
      </div>
      <div class="store-address">
        <i class="fas fa-map-marker-alt"></i>
        <span>万达广场1楼A区102号</span>
      </div>
    </div>
    
    <!-- 订单商品 -->
    <div class="order-products">
      <div class="section-title">订单商品</div>
      <div class="product-item" v-for="(item, index) in products" :key="index">
        <div class="product-img">
          <img :src="item.image" :alt="item.name">
        </div>
        <div class="product-info">
          <div class="product-name">{{ item.name }}</div>
          <div class="product-spec">{{ item.spec }}</div>
        </div>
        <div class="product-price">
          <div class="price">¥{{ item.price.toFixed(2) }}</div>
          <div class="quantity">x{{ item.quantity }}</div>
        </div>
      </div>
    </div>
    
    <!-- 订单信息 -->
    <div class="order-info">
      <div class="section-title">订单信息</div>
      <div class="info-item">
        <span>订单号：</span>
        <span>20230621123456789</span>
      </div>
      <div class="info-item">
        <span>下单时间：</span>
        <span>2023-06-21 14:30:25</span>
      </div>
      <div class="info-item">
        <span>取餐时间：</span>
        <span>2023-06-21 15:05:12</span>
      </div>
      <div class="info-item">
        <span>取餐号：</span>
        <span class="highlight">A102</span>
      </div>
      <div class="info-item">
        <span>支付方式：</span>
        <span>微信支付</span>
      </div>
      <div class="info-item">
        <span>备注：</span>
        <span>少冰，珍珠多加一份</span>
      </div>
    </div>
    
    <!-- 价格明细 -->
    <div class="price-details">
      <div class="section-title">价格明细</div>
      <div class="price-item">
        <span>商品总额</span>
        <span>¥38.00</span>
      </div>
      <div class="price-item">
        <span>打包费</span>
        <span>¥2.00</span>
      </div>
      <div class="price-item discount">
        <span>优惠</span>
        <span>-¥5.00</span>
      </div>
      <div class="price-item total">
        <span>实付金额</span>
        <span class="highlight">¥35.00</span>
      </div>
    </div>
    
    <!-- 底部操作栏 -->
    <div class="order-actions">
      <button class="btn reorder">再来一单</button>
      <button class="btn contact">联系客服</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  
  const products = ref([
    { 
      name: '珍珠奶茶', 
      spec: '大杯/去冰/全糖', 
      price: 8.00, 
      quantity: 2, 
      image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' 
    },
    { 
      name: '草莓摇摇奶昔', 
      spec: '中杯/少冰', 
      price: 10.00, 
      quantity: 1, 
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' 
    },
    { 
      name: '蜜桃四季春', 
      spec: '大杯/正常冰', 
      price: 7.00, 
      quantity: 1, 
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' 
    },
    { 
      name: '摩天脆脆冰淇淋', 
      spec: '标准', 
      price: 3.00, 
      quantity: 2, 
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' 
    }
  ]);
</script>

<style scoped>
  .order-page {
    padding-bottom: 80px;
  }
  
  /* 顶部导航 */
  .order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  .back-btn, .share-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #666;
  }
  
  .order-header h2 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
  
  /* 订单状态 */
  .order-status {
    text-align: center;
    padding: 30px 20px;
    background: linear-gradient(to right, #FF2D55, #FF6B93);
    color: white;
  }
  
  .status-icon {
    font-size: 48px;
    margin-bottom: 10px;
  }
  
  .status-text {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .status-desc {
    font-size: 14px;
    opacity: 0.9;
  }
  
  /* 店铺信息 */
  .store-info {
    background: white;
    padding: 20px;
    margin: 10px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  
  .store-header {
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 15px;
  }
  
  .store-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    margin-right: 12px;
  }
  
  .store-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .store-details {
    flex: 1;
  }
  
  .store-details h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  
  .store-rating span {
    font-size: 12px;
    color: #666;
    margin-right: 10px;
  }
  
  .store-phone {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FF2D55;
    font-size: 16px;
  }
  
  .store-address {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666;
  }
  
  .store-address i {
    margin-right: 8px;
    color: #FF2D55;
  }
  
  /* 内容区块标题 */
  .section-title {
    font-size: 16px;
    font-weight: 600;
    padding: 15px 20px 10px;
    color: #333;
  }
  
  /* 订单商品 */
  .order-products {
    background: white;
    margin: 10px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  
  .product-item {
    display: flex;
    padding: 15px 20px;
    border-bottom: 1px solid #f0f0f0;
  }
  
  .product-item:last-child {
    border-bottom: none;
  }
  
  .product-img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    overflow: hidden;
    margin-right: 15px;
  }
  
  .product-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .product-info {
    flex: 1;
  }
  
  .product-name {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  
  .product-spec {
    font-size: 13px;
    color: #999;
  }
  
  .product-price {
    text-align: right;
  }
  
  .price {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  
  .quantity {
    font-size: 13px;
    color: #999;
  }
  
  /* 订单信息 */
  .order-info {
    background: white;
    margin: 10px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    padding: 0 20px 15px;
  }
  
  .info-item {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 10px 0;
    border-bottom: 1px solid #f9f9f9;
  }
  
  .info-item:last-child {
    border-bottom: none;
  }
  
  .info-item span:first-child {
    color: #999;
  }
  
  .highlight {
    color: #FF2D55;
    font-weight: 500;
  }
  
  /* 价格明细 */
  .price-details {
    background: white;
    margin: 10px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    padding: 0 20px 15px;
  }
  
  .price-item {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 10px 0;
  }
  
  .price-item.discount {
    color: #4CAF50;
  }
  
  .price-item.total {
    border-top: 1px solid #f0f0f0;
    margin-top: 5px;
    padding-top: 15px;
    font-weight: 500;
    font-size: 16px;
  }
  
  /* 底部操作栏 */
  .order-actions {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 480px;
    margin: 0 auto;
    display: flex;
    padding: 15px;
    background: white;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
  }
  
  .btn {
    flex: 1;
    height: 48px;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    margin: 0 5px;
  }
  
  .reorder {
    background: #FF2D55;
    color: white;
  }
  
  .contact {
    background: #f8f8f8;
    color: #333;
  }
  </style>