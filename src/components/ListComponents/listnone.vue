<template>
  <div class="listnone-container">
    <!-- 图片部分 -->
    <div class="image-container">
      <!-- 中心的图片 -->
      <img
        src="/src/img/list/list2.jpg"
        alt="空状态图片"
        class="empty-image"
      />
    </div>

    <!-- 文字提示 -->
    <div class="text">
      暂无内容，快去添加一些吧！
    </div>

    <!-- 按钮 -->
    <button class="button" @click="handleButtonClick">
      去喝一杯
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// 定义按钮点击事件
const handleButtonClick = () => {
  console.log('用户点击了“添加内容”');
  // 在实际项目中，可以跳转到添加内容的页面，例如：
  // router.push('/add-content');
  router.push({ name: 'OrderView'});
};
// 如果需要使用路由
const router = useRouter();

</script>

<style  scoped>
.listnone-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
  background-color: #f5f5f5;
}

.image-container {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-image {
  width: 150px;
}

.text {
  font-size: 18px;
  color: #666;
  margin-top: 20px;
  margin-bottom: 50px;
}

.button {
  width: 200px;
  padding: 15px 0;
  font-size: 18px;
  color: white;
  background-color: #e81e1e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
