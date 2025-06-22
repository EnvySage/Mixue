<script setup>
import { ref } from 'vue';
import Homepicture from './Homepicture.vue';

const vipInfo = ref({
  level: '小雪球会员',
  number: '138******78',
  points: 215,
  progress: 41,
  coupons: 10
});

const showPrivilegesModal = ref(false);

const togglePrivileges = () => {
  showPrivilegesModal.value = !showPrivilegesModal.value;
};
</script>

<template>
  <div class="vip-card-container">

    <div class="carousel-placeholder">
      <Homepicture></Homepicture>
    </div>

    <!-- VIP卡片 -->
    <div class="vip-card">
      <div class="vip-header">
        <div class="vip-level">
          <span class="level-icon">👑</span>
          <span class="level-name">{{ vipInfo.level }}</span>
        </div>
        <div class="vip-number">{{ vipInfo.number }}</div>
      </div>

      <div class="points-progress">
        <div class="progress-text">
          <span class="points-value">{{ vipInfo.points }}</span>
          <span class="points-label">雪王币</span>
        </div>
        <div class="progress-bar">
          <div class="progress" :style="{ width: vipInfo.progress + '%' }"></div>
        </div>
        <div class="progress-label">{{ vipInfo.progress }}/100</div>
      </div>

      <div class="coupon-info">
        <span class="coupon-icon">🎫</span>
        <span class="coupon-count">{{ vipInfo.coupons }}张优惠券</span>
      </div>

      <div class="vip-privileges" @click="togglePrivileges">
        <span class="privilege-label">会员特权</span>
        <span class="privilege-item">周五秒杀日</span>
        <span class="privilege-item">秒杀免单券</span>
        <span class="jiantou">&gt;</span>
      </div>
    </div>
    <div v-if="showPrivilegesModal" class="privileges-modal" @click.self="togglePrivileges">
      <div class="modal-content">
        <div class="modal-header">
          <span>Hi, {{ vipInfo.number }} {{ vipInfo.level }}</span>
          <span class="close-btn" @click="togglePrivileges">×</span>
        </div>
        <div class="modal-body">
          <p class="privilege-tip">您有*项权益，开启提醒不错过</p>

          <div class="privilege-section">
            <h3>每日礼</h3>
            <div class="privilege-item">
              <img src="/src/img/main/coffeeb.png" alt="咖啡日">
              <div>
                <p>周一咖啡日</p>
                <p class="desc">美式3.99起</p>
              </div>
              <button class="remind-btn">提醒我</button>
            </div>
            <div class="privilege-item">
              <img src="/src/img/main/zhekou.png" alt="咖啡日">
              <div>
                <p>周二抵现日</p>
                <p class="desc">雪王币当钱花</p>
              </div>
              <button class="remind-btn">提醒我</button>
            </div>
            <div class="privilege-item">
              <img src="/src/img/main/vip.png" alt="咖啡日">
              <div>
                <p>周三会员日</p>
                <p class="desc">满12减2元</p>
              </div>
              <button class="remind-btn">提醒我</button>
            </div>
            <div class="privilege-item">
              <img src="/src/img/main/xiaoliao.png" alt="咖啡日">
              <div>
                <p>周四加料日</p>
                <p class="desc">满12可享</p>
              </div>
              <button class="remind-btn">提醒我</button>
            </div>
            <div class="privilege-item">
              <img src="/src/img/main/miaosha.png" alt="咖啡日">
              <div>
                <p>周五秒杀日</p>
                <p class="desc">雪王币秒杀卷</p>
              </div>
              <button class="remind-btn">提醒我</button>
            </div>
          </div>

          <router-link to="/Own" class="privilege-section">
            <p class="view-more">到「会员中心」查看权益详情 </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.vip-card-container {
  position: relative;
  width: 100%;
  max-width: 414px;
  margin: 0 auto;
}

.carousel-placeholder {
  height: 200px;
  background: linear-gradient(135deg, #87CEEB, #E0F7FA);
  border-radius: 12px;
  margin-bottom: -10px;
  z-index: 1;
}

.vip-card {
  position: relative;
  width: 90%;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transform: translateY(20px);
}

.vip-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.vip-level {
  display: flex;
  align-items: center;
  gap: 6px;
}

.level-icon {
  font-size: 18px;
}

.level-name {
  font-size: 14px;
  font-weight: bold;
}

.vip-number {
  font-size: 14px;
  color: #666;
}

.points-progress {
  margin: 10px 0;
}

.progress-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.points-value {
  font-size: 16px;
  font-weight: bold;
}

.points-label {
  font-size: 12px;
  color: #666;
}

.progress-bar {
  height: 6px;
  background-color: #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #ff6b6b;
  transition: width 0.3s ease;
}

.progress-label {
  text-align: right;
  font-size: 12px;
  margin-top: 4px;
  color: #666;
}

.coupon-info {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 8px 0;
  color: #ff6b6b;
}

.coupon-icon {
  font-size: 16px;
}

.coupon-count {
  font-size: 12px;
}

.vip-privileges {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  border-top: 1px solid #f0f0f0;
}

.privilege-label {
  font-size: 12px;
  color: #666;
}

.privilege-item {
  margin: 12px;
  font-size: 12px;
  color: #ff6b6b;
  background-color: #fff1f1;
  padding: 2px 6px;
  border-radius: 4px;
}

.jiantou {
  position: fixed;
  right: 10px;
}

.privileges-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  width: 90%;
  max-width: 400px;
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.close-btn {
  font-size: 20px;
  cursor: pointer;
}

.privilege-tip {
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
}

.privilege-section {
  margin-bottom: 20px;
}

.privilege-section h3 {
  color: #ff6b6b;
  margin-bottom: 8px;
}

.privilege-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 10px;
  border-bottom: 1px solid #f0f0f0;
}

.privilege-item img {
  width: 24px;
  height: 24px;
}

.privilege-item p {
  flex: 1;
  margin: 0;
}

.privilege-item .desc {
  color: #666;
  font-size: 12px;
}

.remind-btn {
  position: fixed;
  right: 40px;
  background: none;
  border: 1px solid #ff6b6b;
  color: #ff6b6b;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
}

.view-more {
  color: #ff6b6b;
  font-size: 14px;
  text-align: right;
}
</style>