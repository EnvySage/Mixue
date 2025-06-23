<template>
  <div class="container">
    
    
    
    <div class="current-order">
      <div class="order-header">
        <h2>再来一单</h2>
        <!-- <span>2/10</span> -->
      </div>
      <div class="horizontal-scroll">
        <div class="order-item"  @click="goToDetail(products[0].productId, 'product')">
          <div class="order-item-header">自提 蜜雪冰城（新华学院校内店）</div>
          <div class="order-item-content">
           
              <img class="order-item-image" :src="products[0].imageUrl" alt="">
          
            <div class="order-item-info">
              <div class="order-item-name">{{products[0].name}}</div>
              <div class="order-item-note">{{products[0].description}}</div>
            </div>
          </div>
          <div class="order-item-actions">
            <div class="count">x1</div>
          </div>
          <div class="order-actions">
        <div class="total-items">共1件</div>
        <div class="add-button">+</div>
      </div>
        </div>

         <div class="order-item" @click="goToDetail(products[1].productId, 'product')">
          <div class="order-item-header">自提 蜜雪冰城（新华学院校内店）</div>
          <div class="order-item-content">
             <img class="order-item-image" :src="products[1].imageUrl" alt="">
            <div class="order-item-info">
              <div class="order-item-name">{{products[1].name}}</div>
              <div class="order-item-note">{{products[1].description}}</div>
            </div>
          </div>
          <div class="order-item-actions">
            <div class="count">x1</div>
          </div>
          <div class="order-actions">
        <div class="total-items">共1件</div>
        <div class="add-button">+</div>
      </div>
        </div>
        
        <!-- 可以添加更多订单项 -->
      </div>
      
    </div>
    
    <div class="recommended">
      <h2 class="section-title">可能喜欢</h2>
      <div class="products-grid">
        <!-- 复制粘贴 -->
        <div class="product-card"  @click="goToDetail(products[0].productId, 'product')">
          <img class="product-image" :src="products[0].imageUrl" alt="">
          <div class="product-info">
            <div class="product-name">{{products[0].name}}</div>
            <div class="product-tags">
              <span class="product-tag">{{ products[0].category }}</span>
              <span class="product-tag"></span>
            </div>
            <div class="product-description">{{products[0].description}}</div>
            <div class="product-price">
              <div class="price">¥{{products[0].price}} <span class="price-start">起</span></div>
              <div class="add-button">+</div>
            </div>
          </div>
        </div>
        
        <div class="product-card">
          <div class="product-image">
            <img class="product-image" :src="products[2].imageUrl" alt="">
            <div class="sold-out">本店暂时售罄</div>
          </div>
          <div class="product-info">
            <div class="product-name">{{products[2].name}}</div>
            <div class="product-description">{{products[2].description}}</div>
            <div class="product-price">
              <div class="price">¥{{products[2].price}} <span class="price-start">起</span></div>
            </div>
          </div>
        </div>
        <div class="product-card"  @click="goToDetail(products[3].productId, 'product')">
          <img class="product-image" :src="products[3].imageUrl" alt="">
          <div class="product-info">
            <div class="product-name">{{products[3].name}}</div>
            <div class="product-tags">
              <span class="product-tag">清甜爽口</span>
              <span class="product-tag">人气明星</span>
            </div>
            <div class="product-description">{{products[3].description}}</div>
            <div class="product-price">
              <div class="price">¥{{products[3].price}} <span class="price-start">起</span></div>
              <div class="add-button">+</div>
            </div>
          </div>
        </div>

         <div class="product-card"  @click="goToDetail(products[4].productId, 'product')">
          <img class="product-image" :src="products[4].imageUrl" alt="">
          <div class="product-info">
            <div class="product-name">{{products[4].name}}</div>
            <div class="product-tags">
              <!-- <span class="product-tag">清甜爽口</span>
              <span class="product-tag">人气明星</span> -->
            </div>
            <div class="product-description">{{products[4].description}}</div>
            <div class="product-price">
              <div class="price">¥{{products[4].price}} <span class="price-start">起</span></div>
              <div class="add-button">+</div>
            </div>
          </div>
        </div>
        <!-- 可以添加更多推荐产品 -->
      </div>
    </div>
  </div>
</template>
<script setup>
import ProductList from '../../../public/ProductList.json'
import { useRouter } from 'vue-router';
const router = useRouter();
const products = ProductList.productList
console.log(products[0].name);
const goToDetail = (id , type) => {
  if(type === 'product'){
    router.push({ name: 'DetailsView', params: { id } });
  }else{
    router.push({ name: 'snackDetail', params: { id } });
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 70px; /* 为底部导航留出空间 */
}

.header {
  background-color: #fff;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.store-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.store-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.distance {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}

.coupon {
  color: #ff4d4f;
  margin: 10px 0;
  font-size: 14px;
}

.view-more {
  text-align: right;
  color: #999;
  font-size: 14px;
}

.menu-tabs {
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 0 15px;
}

.menu-tab {
  padding: 15px 0;
  margin: 0 10px;
  font-size: 16px;
  position: relative;
  color: #666;
}

.menu-tab.active {
  color: #333;
  font-weight: bold;
}

.menu-tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #ff4d4f;
}

.menu-tab i {
  color: #ff4d4f;
  margin-right: 5px;
}

.current-order {
  margin: 15px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
}

.order-header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
}

.order-header h2 {
  font-size: 18px;
  font-weight: bold;
}

.order-detail {
  display: flex;
  padding: 15px;
}

.order-image {
  width: 80px;
  height: 80px;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 15px;
}

.order-info {
  flex: 1;
}

.order-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.order-note {
  font-size: 14px;
  color: #999;
}

.order-actions {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  border-top: 1px solid #f0f0f0;
}

.total-items {
  font-size: 14px;
  color: #666;
}

.add-button {
  width: 30px;
  height: 30px;
  background-color: #ff4d4f;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.recommended {
  margin: 15px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.products-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
   margin-bottom: 60px;
}

.product-card {
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.product-image {
  height: 150px;
  background-color: #f0f0f0;
  position: relative;
}

.sold-out {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  padding: 5px 0;
  font-size: 12px;
}

.product-info {
  padding: 10px;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.product-tags {
  display: flex;
  margin-bottom: 5px;
}

.product-tag {
  font-size: 12px;
  color: #ff4d4f;
  margin-right: 8px;
}

.product-description {
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #ff4d4f;
}

.price-start {
  font-size: 12px;
  color: #999;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #eee;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #999;
}

.nav-item.active {
  color: #ff4d4f;
}

.nav-icon {
  font-size: 24px;
  margin-bottom: 5px;
}

.horizontal-scroll {
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.order-item {
  display: inline-block;
  width: 100%;
  vertical-align: top;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 15px;
  padding: 15px;
  white-space: normal;
}

.order-item-header {
  font-size: 14px;
  color: #ff4d4f;
  margin-bottom: 10px;
}

.order-item-content {
  display: flex;
}

.order-item-image {
  width: 60px;
  height: 60px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-right: 10px;
}

.order-item-info {
  flex: 1;
}

.order-item-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.order-item-note {
  font-size: 12px;
  color: #999;
}

.order-item-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.count {
  font-size: 14px;
  color: #666;
}
</style>