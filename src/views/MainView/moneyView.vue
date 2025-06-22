<template>
  <div class="container">
    <!-- 顶部标题区域 -->
    <div class="header">
      <div class="title">我的雪王币</div>
      <div class="coin-count">{{ money }}</div>
      <div class="links" style="position: relative;">
        <img src="../../img/main/vouchers3.png" alt="" style="position: absolute; top: -130px; right: 10px; z-index: 9999;">
        <router-link to="/detail">雪王币明细</router-link>
        <span class="divider">></span>
        <router-link to="/rules">雪王币规则</router-link>
      </div>
    </div>

    <!-- 热门兑换区域 -->
    <div class="hot-exchange">
      <div class="section-title">
        <span>热门兑换</span>
        <router-link to="/more" class="view-more">查看更多 ></router-link>
      </div>

      <div class="exchange-cards">
        <!-- 1元饮品券 -->
        <div class="card">
          <div class="card-left">
            <div class="card-title" >1元饮品券</div>
            <div class="card-price">388 雪王币</div>
          </div>
          <button class="exchange-btn" @click="dec(388)">去兑换</button>
        </div>

        <!-- 88折饮品券 -->
        <div class="card">
          <div class="card-left">
            <div class="card-title">88折饮品券</div>
            <div class="card-price">688 雪王币</div>
          </div>
          <button class="exchange-btn" @click="dec(688)">去兑换</button>
        </div>

        <div class="tasks-section">
          <div class="section-title">
            <span>日常任务</span>
          </div>

          <div class="task-item">
            <div class="task-info">
              <div class="task-name">每日签到</div>
              <div class="task-reward">
                <i class="fas fa-plus-circle"></i>
                +5雪王币
              </div>
            </div>
            <div class="task-action">
              <button class="task-btn pulse" @click="add(5)">去签到</button>
            </div>
          </div>

          <div class="task-item">
            <div class="task-info">
              <div class="task-name">完成订单</div>
              <div class="task-reward">
                <i class="fas fa-plus-circle"></i>
                +10雪王币（每实付1元）
              </div>
            </div>
            <div class="task-action">
              <RouterLink :to="'/order'" class="task-btn pulse" @click="add(10)">去下单</RouterLink>
            </div>
          </div>
        </div>

        <!-- 新手任务 -->
        <div class="tasks-section">
          <div class="section-title">
            <span>新手任务</span>
          </div>

          <div class="task-item">
            <div class="task-info">
              <div class="task-name">完成首单</div>
              <div class="task-reward">
                <i class="fas fa-plus-circle"></i>
                +20雪王币（每实付1元）
              </div>
            </div>
            <div class="task-action">
              <button class="task-btn completed">已完成</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 不需要响应式数据，纯静态页面
import { ref } from 'vue';
import json from '../../../public/power.json';


const sign =ref();
sign.value = json.sign;
const money = ref();
money.value = sign.value[0].num;
function dec(num) {
    // 这里是模拟减少雪王币的逻辑
    if (money.value < num) {
        alert('雪王币不足');
        return;
    }
    money.value -= num;
}
function add(num) {
    // 这里是模拟增加雪王币的逻辑
    money.value += num;
    
}


</script>

<style scoped>
/* 整体样式 */
.container {
  /* 手机屏幕宽度 */

  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}

/* 头部区域 */
.header {
  background: linear-gradient(to right, #ea424f, #e70012);
  border-radius: 16px;
  padding: 25px 20px;
  color: white;
  position: relative;
  box-shadow: 0 4px 12px rgba(255, 102, 0, 0.15);
}

.title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
}

.coin-count {
  font-size: 48px;
  font-weight: bold;
  margin: 10px 0 25px;
  letter-spacing: 1px;
}

.links {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.divider {
  margin: 0 8px;
  font-size: 12px;
}

/* 热门兑换区域 */
.hot-exchange {
  margin-top: 25px;
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.view-more {
  font-size: 14px;
  color: #999;
  text-decoration: none;
}

/* 兑换卡片 */
.exchange-cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.card-left {
  line-height: 1.4;
}

.card-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.card-price {
  font-size: 14px;
  color: #e70012;
  font-weight: bold;
}

.exchange-btn {
  background: linear-gradient(135deg, #ea424f, #e70012);
  color: white;
  border: none;
  border-radius: 16px;
  padding: 8px 18px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(255, 102, 0, 0.3);
}
 .tasks-section {
      background: white;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
      margin-bottom: 20px;
    }
    
    .section-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 500;
      color: #333;
      padding-bottom: 10px;
      border-bottom: 1px solid #f0f0f0;
    }
    
    .task-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid #f5f5f5;
    }
    
    .task-item:last-child {
      border-bottom: none;
    }
    
    .task-info {
      flex: 1;
    }
    
    .task-name {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 4px;
    }
    
    .task-reward {
      font-size: 14px;
      color: #e70012;
      display: flex;
      align-items: center;
    }
    
    .task-reward i {
      margin-right: 6px;
    }
    
    .task-action {
      min-width: 80px;
      text-align: right;
    }
    
    .task-btn {
      background: linear-gradient(135deg, #ea424f, #e70012);
      color: white;
      border: none;
      border-radius: 16px;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(255, 102, 0, 0.3);
      transition: all 0.3s ease;
    }
    
    .task-btn:active {
      transform: scale(0.98);
      opacity: 0.9;
    }
    
    .task-btn.completed {
      background: #e0e0e0;
      color: #999;
      box-shadow: none;
      cursor: default;
    }
    
</style>
