<template>
     <div class="container">
    <!-- 顶部导航栏 -->
    <div class="header">
      <div class="header-left">
        <h2>再来一单</h2>
        <span class="order-source">自提 蜜雪冰城（新华学院店内店）</span>
      </div>
      <div class="header-right">
        <span>1/10</span>
        <span>自动</span>
      </div>
    </div>

    <!-- 当前商品信息 -->
    <div class="selected-product">
      <img src="https://via.placeholder.com/50" alt="商品图标" class="product-icon">
      <div class="product-info">
        <h3 class="product-name">新鲜冰淇淋(黑芝麻脆筒)</h3>
      </div>
      <div class="product-quantity">
        <span>共2件</span>
        <div class="add-button">+</div>
      </div>
    </div>

    <!-- 推荐商品区域 -->
    <div class="recommended-products">
      <h3>可能喜欢</h3>
      <div class="product-grid">
        <div class="product-card">
          <img src="https://via.placeholder.com/300x360" alt="冰鲜柠檬水">
          <div class="product-info">
            <span class="product-name">冰鲜柠檬水</span>
            <span class="product-desc">大片柠檬看得见，现切现捣超新鲜</span>
          </div>
          <div class="price">¥4 起</div>
          <div class="add-button">+</div>
        </div>
        <div class="product-card">
          <img src="https://via-placeholder.com/300x360" alt="棒打鲜橙">
          <div class="product-info">
            <span class="product-name">棒打鲜橙</span>
            <span class="product-desc">大片橙子真给力，一杯满满有维C</span>
          </div>
          <div class="price">¥6 起</div>
          <div class="add-button">+</div>
        </div>
        <div class="product-card">
          <img src="https://via.placeholder.com/300x360" alt="蜜桃乌龙">
          <div class="product-info">
            <span class="product-name">蜜桃乌龙</span>
            <span class="product-desc">蜜桃香气浓郁，回味甘甜</span>
          </div>
          <div class="price">¥8 起</div>
          <div class="add-button">+</div>
        </div>
        <div class="product-card">
          <img src="https://via.placeholder.com/300x360" alt="葡萄酷爽">
          <div class="product-info">
            <span class="product-name">葡萄酷爽</span>
            <span class="product-desc">葡萄果肉多汁，酸甜可口</span>
          </div>
          <div class="price">¥9 起</div>
          <div class="add-button">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
/* 全局样式 */
body {
  font-family: 'Source Sans Pro', Arial, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

/* 顶部导航栏 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-left {
  display: flex;
  align-items: center;
}

.header h2 {
  font-size: 20px;
  margin: 0;
}

.order-source {
  font-size: 14px;
  color: #666;
  margin-left: 10px;
}

.header-right span {
  font-size: 14px;
  color: #666;
}

.header-right span + span {
  margin-left: 10px;
}

/* 当前商品信息 */
.selected-product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
}

.product-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.product-info {
  flex: 1;
  margin-left: 10px;
}

.product-name {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}

.product-quantity {
  display: flex;
  align-items: center;
}

.product-quantity span {
  font-size: 14px;
  color: #666;
}

.add-button {
  width: 30px;
  height: 30px;
  background-color: #ff6f61;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

/* 推荐商品区域 */
.recommended-products {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

.recommended-products h3 {
  font-size: 18px;
  margin: 0 0 10px;
  color: #333;
}

/* 商品卡片 */
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.product-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.product-card img {
  width: 100%;
  height: auto;
}

.product-info {
  padding: 10px;
}

.product-name {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 5px;
}

.product-desc {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.price {
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;
}

/* 加入按钮 */
.add-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #ff6f61;
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