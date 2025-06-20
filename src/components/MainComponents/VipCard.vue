<script setup>
import { ref } from 'vue';

const vipInfo = ref({
  level: '小雪球会员',
  number: '147******63',
  points: 563,
  progress: 41, // 进度百分比
  coupons: 0
});
</script>

<template>
  <div class="vip-card">
    <!-- 会员信息区域 -->
    <div class="vip-info">
      <div class="vip-level">
        <span class="level-icon">👑</span>
        <span class="level-name">{{ vipInfo.level }}</span>
      </div>
      <div class="vip-number">{{ vipInfo.number }}</div>
    </div>
    
    <!-- 积分进度条 -->
    <div class="points-progress">
      <div class="progress-text">
        <span>{{ vipInfo.points }}</span>
        <span>雪王币</span>
      </div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: vipInfo.progress + '%' }"></div>
      </div>
      <div class="progress-label">{{ vipInfo.progress }}/100</div>
    </div>

</div>
</template>

<style scoped>
.vip-card {
  background: linear-gradient(to bottom, #ffeb3b, #ffc107);
  border-radius: 12px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #d32f2f;
}

.vip-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.vip-level {
  display: flex;
  align-items: center;
  gap: 8px;
}

.level-icon {
  font-size: 20px;
}

.vip-number {
  font-size: 14px;
  color: #d32f2f;
}

.points-progress {
  margin: 16px 0;
}

.progress-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.progress-bar {
  height: 8px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #d32f2f;
  transition: width 0.3s ease;
}

.progress-label {
  text-align: right;
  font-size: 12px;
  margin-top: 4px;
}

.privileges {
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
}

.privilege-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.privilege-item img {
  width: 32px;
  height: 32px;
}

.privilege-item span {
  font-size: 12px;
}
</style>