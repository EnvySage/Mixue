<template>
  <div class="voucher-container">
    <div class="back-button" @click="goBack">
      <div class="iconfont icon-fanhui"></div>
    </div>
    <div class="status-tabs">
      <div 
        v-for="(tab, index) in tabs" 
        :key="index"
        class="status-tab"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab }}
      </div>
    </div>
    
    <div class="coupons-container">
      <template v-if="activeTab === 0">
        
        
        <!-- 9折饮品券 -->
        <div class="coupon-card-white">
          
          <div class="coupon-details">
            <div class="coupon-details-title">
              咖啡整单88折券 <span class="coupon-tag-new">新会员专享</span>
            </div>
            
            <div class="coupon-info">
              <i class="far fa-clock"></i>
              <div>发券时间：2025.06.18 15:06:18</div>
            </div>
            <div class="coupon-info">
              <i class="far fa-calendar"></i>
              <div>券有效期：2025.06.18 - 2025.07.18</div>
            </div>
            <div class="coupon-info">
              <i class="fas fa-mobile-alt"></i>
              <div>使用渠道：小程序、APP</div>
            </div>
            <div class="coupon-info">
              <i class="fas fa-shopping-bag"></i>
              <div>适用场景：自提、外送</div>
            </div>
            
            <div class="coupon-limit">优惠上限抵5元</div>
            
            <div class="coupon-actions">
              <a href="#" class="rules-link">
                使用规则 <i class="fas fa-chevron-right"></i>
              </a>
              <RouterLink :to="{path: '/Order'}" class="use-btn">立即使用</RouterLink>
            </div>
          </div>
        </div>

        <div class="coupon-card-white">
          
          <div class="coupon-details">
            <div class="coupon-details-title">
              9折饮品券 <span class="coupon-tag-new">新会员专享</span>
            </div>
            
            <div class="coupon-info">
              <i class="far fa-clock"></i>
              <div>发券时间：2025.06.18 15:06:18</div>
            </div>
            <div class="coupon-info">
              <i class="far fa-calendar"></i>
              <div>券有效期：2025.06.18 - 2025.07.18</div>
            </div>
            <div class="coupon-info">
              <i class="fas fa-mobile-alt"></i>
              <div>使用渠道：小程序、APP</div>
            </div>
            <div class="coupon-info">
              <i class="fas fa-shopping-bag"></i>
              <div>适用场景：自提、外送</div>
            </div>
            
            <div class="coupon-limit">优惠上限抵5元</div>
            
            <div class="coupon-actions">
              <a href="#" class="rules-link">
                使用规则 <i class="fas fa-chevron-right"></i>
              </a>
              <RouterLink :to="{path: '/Order'}" class="use-btn">立即使用</RouterLink>
            </div>
          </div>
        </div>

        <div class="coupon-card-white">
          
          <div class="coupon-details">
            <div class="coupon-details-title">
              第二件7折券 <span class="coupon-tag-new">新会员专享</span>
            </div>
            
            <div class="coupon-info">
              <i class="far fa-clock"></i>
              <div>发券时间：2025.06.18 15:06:18</div>
            </div>
            <div class="coupon-info">
              <i class="far fa-calendar"></i>
              <div>券有效期：2025.06.18 - 2025.07.18</div>
            </div>
            <div class="coupon-info">
              <i class="fas fa-mobile-alt"></i>
              <div>使用渠道：小程序、APP</div>
            </div>
            <div class="coupon-info">
              <i class="fas fa-shopping-bag"></i>
              <div>适用场景：自提</div>
            </div>
            
            <div class="coupon-limit">优惠上限抵4元</div>
            
            <div class="coupon-actions">
              <a href="#" class="rules-link">
                使用规则 <i class="fas fa-chevron-right"></i>
              </a>
              <RouterLink :to="{path: '/Order'}" class="use-btn">立即使用</RouterLink>
            </div>
          </div>
        </div>

        
          
          
      </template>
      
      <template v-else>
        <div class="empty-state">
          <i class="far fa-frown"></i>
          <h3>暂无{{ tabs[activeTab] }}的优惠券</h3>
          <p>去获取更多优惠吧~</p>
        </div>
      </template>
    </div>
    
    <div class="footer">
      <p>蜜雪冰城 © 2025 让每个人享受高质平价的美味</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const tabs = ['未使用', '已使用', '已过期', '已失效']
const activeTab = ref(0)
const snowflakes = ref([])

// 创建雪花效果
const createSnowflakes = () => {
  const flakes = []
  for (let i = 0; i < 15; i++) {
    flakes.push({
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * -20}%`,
        animationDuration: `${Math.random() * 5 + 5}s`,
        animationDelay: `${Math.random() * 3}s`,
        fontSize: `${Math.random() * 10 + 16}px`,
        opacity: Math.random() * 0.5 + 0.3
      }
    })
  }
  snowflakes.value = flakes
}

onMounted(() => {
  createSnowflakes()
})
const goBack = () => {
  history.back();
};
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
  top: 10px;
  left: 10px;
  z-index: 10;
}

.iconfont {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  font-size: 18px;
  padding: 10px;
}
.voucher-container {
  background: linear-gradient(135deg, #fff8f0, #fff0e6);
  color: #333;
  min-height: 100vh;
  margin-top:20px;
  display: flex;
  flex-direction: column;
  padding-top:30px ;

  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(255, 123, 44, 0.15);
}

.header {
  background: linear-gradient(135deg, #ff9d2d, #fe9f01);
  color: white;
  padding: 25px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
}

.snowflakes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.snowflake {
  position: absolute;
  color: rgba(255, 255, 255, 0.6);
  animation: fall linear infinite;
}

@keyframes fall {
  to {
    transform: translateY(100vh) rotate(360deg);
  }
}

.logo {
  font-size: 28px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.logo-icon {
  background: white;
  color: #fe9f01;
  width: 40px;
  height: 40px;
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

.subtitle {
  font-size: 14px;
  opacity: 0.9;
}

.status-tabs {
  display: flex;
  background: #f8f8f8;
  padding: 5px;
  border-bottom: 1px solid #eee;
  margin: 20px 20px;
  
  border-radius: 30px;
}

.status-tab {
  flex: 1;
  text-align: center;
  padding: 15px 0;
  font-size: 15px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  border-radius: 30px;
}

.status-tab.active {
  color: #eb3a4a;
  font-weight: 600;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.coupons-container {
  padding: 20px;
  min-height: 400px;
  flex: 1;
}

.coupon-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 25px;
  position: relative;
  transition: transform 0.3s;
  border: 1px solid #ffe9d9;
}

.coupon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 123, 44, 0.2);
}

.coupon-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #ff9d2d, #fe9f01);
  color: white;
}

.coupon-title {
  font-size: 20px;
  font-weight: 700;
}

.coupon-tag {
  background: rgba(255, 255, 255, 0.3);
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 500;
}

.coupon-subtitle {
  padding: 0 20px 20px;
  background: linear-gradient(135deg, #ff9d2d, #fe9f01);
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
}

.coupon-cta {
  display: block;
  width: 100%;
  padding: 14px;
  background: white;
  color: #fe9f01;
  text-align: center;
  font-weight: 700;
  font-size: 17px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.coupon-cta:hover {
  background: #fff8f2;
}

.coupon-card-white {
  background: white;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  gap: 20px;
  border: 1px solid #ffe9d9;
  margin-bottom: 20px;
}

.coupon-discount {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #ff9d2d, #fe9f01);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.discount-value {
  font-size: 36px;
  font-weight: 800;
  line-height: 1;
}

.discount-text {
  font-size: 15px;
  margin-top: 5px;
}

.coupon-details {
  flex: 1;
}

.coupon-details-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
  display: flex;
  align-items: center;
}

.coupon-tag-new {
  background: linear-gradient(135deg, #ff9d2d, #fe9f01);
  color: white;
  font-size: 13px;
  padding: 4px 10px;
  border-radius: 30px;
  margin-left: 10px;
}

.coupon-info {
  font-size: 14px;
  color: #666;
  margin: 8px 0;
  display: flex;
  align-items: flex-start;
  line-height: 1.4;
}

.coupon-info i {
  margin-right: 10px;
  min-width: 18px;
  color: #fe9f01;
}

.coupon-limit {
  background: #ffe1e1;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  color: #eb3a4a;
  margin: 12px 0;
  font-weight: 500;
  border-left: 3px solid #e70012;
}

.coupon-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed #eee;
}

.rules-link {
  color: #999;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.2s;
}

.rules-link i {
  margin-left: 5px;
  transition: transform 0.3s;
}

.rules-link:hover {
  color: #fe9f01;
}

.rules-link:hover i {
  transform: translateX(3px);
}

.use-btn {
  background: linear-gradient(135deg, #eb3a4a, #e70012);
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 10px rgba(255, 123, 44, 0.25);
}

.use-btn:hover {
  box-shadow: 0 6px 15px rgba(255, 123, 44, 0.35);
  transform: translateY(-2px);
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.empty-state i {
  font-size: 70px;
  margin-bottom: 20px;
  color: #ffd8c0;
}

.empty-state h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #666;
}

.empty-state p {
  font-size: 15px;
  margin-top: 5px;
}

.watermark {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: rgba(0, 0, 0, 0.05);
  font-size: 12px;
  transform: rotate(-15deg);
  user-select: none;
  font-weight: bold;
}

.footer {
  text-align: center;
  padding: 20px;
  color: #999;
  font-size: 13px;
  background: #fafafa;
  border-top: 1px solid #eee;
}

@media (max-width: 480px) {
  .coupon-card-white {
    flex-direction: column;
  }
  
  .coupon-discount {
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: center;
    gap: 15px;
  }
  
  .discount-value {
    font-size: 32px;
  }
  
  .status-tabs {
    margin: 0 10px;
  }
}
</style>