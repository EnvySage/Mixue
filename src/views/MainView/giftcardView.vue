<template>
  <div class="gift-card-container">
    <!-- 顶部标题栏 -->
    <div class="back-button" @click="goBack">
      <div class="iconfont icon-fanhui"></div>
    </div>
    
    <!-- 选项卡导航 -->
    <div class="tabs">
      <div 
        class="tab"
        :class="{ active: activeTab === 'buy' }"
        @click="activeTab = 'buy'"
      >
        购买礼品卡
      </div>
      <div 
        class="tab"
        :class="{ active: activeTab === 'my' }"
        @click="activeTab = 'my'"
      >
        我的礼品卡
      </div>
    </div>
    
    <!-- 内容区域 -->
    <div class="content-container">
      <!-- 雪王礼品卡 -->
      <div class="gift-card-section">
        <div class="section-title">
          <i class="fas fa-gift"></i>
          <span>雪王礼品卡</span>
        </div>
        
        <div class="gift-card">
          <div class="card-image" :style="{ background: cardBackground }">
            <div class="card-text">{{ cardText }}</div>
            <div class="watermark">蜜雪冰城</div>
          </div>
          <div class="card-info">
            <div class="card-name">雪王心意卡</div>
            <div class="card-desc">赠送亲友，传递甜蜜心意</div>
          </div>
        </div>
      </div>
      
 
      
      
      <!-- 电子礼品卡图案选择 -->
      <div class="design-section">
        <div class="design-title">选购礼物选择电子礼品卡图案</div>
        <div class="design-subtitle">选择卡面</div>
        
        <div class="card-designs">
          <div 
            v-for="(design, index) in designs" 
            :key="index"
            class="design-card"
            :class="{ active: activeDesign === index }"
            @click="activeDesign = index"
          >
            <div class="design-image" :style="{ background: design.background }">
              <div class="design-text">{{ design.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 选项卡状态
const activeTab = ref('buy')

// 当前选择的卡面设计
const activeDesign = ref(0)

// 礼品卡设计选项
const designs = ref([
  { background: 'linear-gradient(135deg, #ffe1e3, #e70012)', text: '大恩' },
  { background: 'linear-gradient(135deg, #4CAF50, #2E7D32)', text: '祝健康' },
  { background: 'linear-gradient(135deg, #2196F3, #0D47A1)', text: '感恩' },
  { background: 'linear-gradient(135deg, #9C27B0, #6A1B9A)', text: '祝福' }
])
const goBack = () => {
  history.back();
};
// 动态卡面背景和文字
const cardBackground = computed(() => designs.value[activeDesign.value].background)
const cardText = computed(() => designs.value[activeDesign.value].text)
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
}
.back-button {
  position: absolute;
  top: 7px;
  left: 7px;
  z-index: 10000;
}

.iconfont {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  font-size: 18px;
  padding: 10px;
}
.gift-card-container {
  background: linear-gradient(135deg, #fff8f0, #fff0e6);
  color: #333;
  min-height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(255, 123, 44, 0.15);
}

.header {
  background: linear-gradient(135deg, #ffe1e3, #e70012);
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.logo-icon {
  background: white;
  color: #e70012;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 22px;
  font-weight: 600;
  margin: 10px 0 5px;
}

.tabs {
  display: flex;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.tab {
  flex: 1;
  text-align: center;
  padding: 18px 0;
  font-size: 16px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
}

.tab.active {
  color: #e70012;
  font-weight: 600;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 3px;
  background: #e70012;
  border-radius: 3px;
}

.content-container {
  padding: 20px;
}

.gift-card-section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
  display: flex;
  align-items: center;
}

.section-title i {
  color: #e70012;
  margin-right: 10px;
}

.gift-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  position: relative;
  transition: transform 0.3s;
  border: 1px solid #ffe9d9;
}

.gift-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 123, 44, 0.2);
}

.card-image {
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.card-text {
  font-size: 46px;
  font-weight: 800;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transform: rotate(-5deg);
  letter-spacing: 8px;
}

.watermark {
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
}

.card-info {
  padding: 20px;
  background: white;
}

.card-name {
  font-size: 22px;
  font-weight: 700;
  color: #e70012;
  margin-bottom: 10px;
}

.card-desc {
  font-size: 15px;
  color: #666;
}

.enterprise-card {
  background: linear-gradient(135deg, #4a90e2, #2b6cb0);
  border-radius: 16px;
  padding: 25px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  margin-bottom: 30px;
}

.enterprise-card::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.enterprise-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
}

.enterprise-desc {
  font-size: 15px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  opacity: 0.9;
}

.learn-more {
  background: white;
  color: #4a90e2;
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.learn-more:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.design-section {
  margin-top: 30px;
}

.design-title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #333;
  position: relative;
}

.design-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #e70012;
  border-radius: 3px;
}

.design-subtitle {
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.card-designs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.design-card {
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.design-card.active {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(255, 123, 44, 0.3);
  border: 2px solid #e70012;
}

.design-card.active::after {
  content: '✓';
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  background: #e70012;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
}

.design-image {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.design-text {
  font-size: 32px;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transform: rotate(-5deg);
  letter-spacing: 4px;
}

@media (max-width: 480px) {
  .logo {
    font-size: 20px;
  }
  
  .title {
    font-size: 20px;
  }
  
  .tab {
    padding: 15px 0;
    font-size: 15px;
  }
  
  .card-text {
    font-size: 36px;
  }
  
  .design-text {
    font-size: 24px;
  }
  
  .enterprise-card {
    padding: 20px;
  }
}
</style>