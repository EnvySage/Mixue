<template>
  <div class="destination-card">
    <div class="store-info">
      <div class="star-icon icon-shoucang iconfont" ></div>
      <span class="store-name">蜜雪冰城（印象汇店）</span>
      <span class="arrow">&gt;</span>
    </div>
    <div class="distance-info">
      <div class="location-icon icon-weizhi iconfont"></div>
      <span class="distance-text">直线距离954m</span>
    </div>
    <div class="coupon-info-container">
        <div class="coupon-info">
          <div class="coupon-icon icon-laba iconfont" ></div>
          <span class="coupon-text">进群领30元券包！</span>
        </div>
        <div class="view-more">查看更多 &gt;</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.destination-card {
  width: 95%;
  height: 100px;
  padding: 5px;
}
.coupon-info-container{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.store-info {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.star-icon {
  color: #f8b115;
  font-size: 20px;
  margin-right: 5px;
}
.store-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.arrow {
  color: #333;
  font-size: 15px;
  margin-left: 5px;
}
.distance-info {
  display: flex;
  align-items: center;
  margin-top: 5px;
}
.location-icon {
  color: #4caf50;
  font-size: 15px;
  margin-right: 5px;
}

.distance-text {
  font-size: 14px;
  color: #666;
}
.coupon-info {
  display: flex;
  align-items: center;
  margin-top: 5px;
}
.coupon-icon {
  color: #e91e63;
  font-size: 18px;
  margin-right: 5px;
}
.coupon-text {
  font-size: 14px;
  color: #333;
}
.view-more {
  color: #337ab7;
  font-size: 14px;
  cursor: pointer;
}
</style>