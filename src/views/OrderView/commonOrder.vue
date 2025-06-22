<template>
  <div class="container">
    
    
    
    <div class="current-order">
      <div class="order-header">
        <h2>再来一单</h2>
        <span>2/10</span>
      </div>
      <div class="horizontal-scroll">
        <div class="order-item">
          <div class="order-item-header">自提 蜜雪冰城（新华学院校内店）</div>
          <div class="order-item-content">
            <div class="order-item-image"></div>
            <div class="order-item-info">
              <div class="order-item-name">桑葚莓莓(升级版)</div>
              <div class="order-item-note">少冰/不额外加糖</div>
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

         <div class="order-item">
          <div class="order-item-header">自提 蜜雪冰城（新华学院校内店）</div>
          <div class="order-item-content">
            <div class="order-item-image"></div>
            <div class="order-item-info">
              <div class="order-item-name">桑葚莓莓(升级版)</div>
              <div class="order-item-note">少冰/不额外加糖</div>
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
        <div class="product-card">
          <div class="product-image"></div>
          <div class="product-info">
            <div class="product-name">草莓啵啵</div>
            <div class="product-tags">
              <span class="product-tag">清甜爽口</span>
              <span class="product-tag">人气明星</span>
            </div>
            <div class="product-description">草莓啵啵，甜蜜啵一个</div>
            <div class="product-price">
              <div class="price">¥9 <span class="price-start">起</span></div>
              <div class="add-button">+</div>
            </div>
          </div>
        </div>
        
        <div class="product-card">
          <div class="product-image">
            <div class="sold-out">本店暂时售罄</div>
          </div>
          <div class="product-info">
            <div class="product-name">柠檬乌龙茶</div>
            <div class="product-description">鲜柠配乌龙，柠檬茶新宠</div>
            <div class="product-price">
              <div class="price">¥5 <span class="price-start">起</span></div>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image"></div>
          <div class="product-info">
            <div class="product-name">草莓啵啵</div>
            <div class="product-tags">
              <span class="product-tag">清甜爽口</span>
              <span class="product-tag">人气明星</span>
            </div>
            <div class="product-description">草莓啵啵，甜蜜啵一个</div>
            <div class="product-price">
              <div class="price">¥9 <span class="price-start">起</span></div>
              <div class="add-button">+</div>
            </div>
          </div>
        </div>
        <!-- 可以添加更多推荐产品 -->
      </div>
    </div>
  </div>
</template>
<style >
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