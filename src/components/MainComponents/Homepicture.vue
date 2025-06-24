<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import swipe1 from '../../img/main/swipe1.png'
import swipe2 from '../../img/main/swipe2.png'
import swipe3 from '../../img/main/swipe3.png'
import swipe4 from '../../img/main/swipe4.png'

const indImg = ref(0);
const images = ref([
  swipe1,
  swipe2,
  swipe3,
  swipe4
]);
 
let timer = null;

const startAutoPlay = () => {
  timer = setInterval(() => {
    indImg.value = (indImg.value + 1) % images.value.length;
  }, 2000);
};

const stopAutoPlay = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

const handleClick = (index) => {
  indImg.value = index;

  stopAutoPlay();
  startAutoPlay();
};
 
onMounted(() => {
  startAutoPlay();
});
 
onUnmounted(() => {
  stopAutoPlay();
});
</script>
 
<template>
  <div 
    class="carousel" 
    @mouseenter="stopAutoPlay" 
    @mouseleave="startAutoPlay"
  >
    <img 
      v-for="(image, index) in images" 
      :key="index" 
      :src="image" 
      :alt="'Slide ' + (index + 1)"
      v-show="indImg === index"
      @click="handleClick(index)"
    >
    
    <div class="indicators">
      <span 
        v-for="(image, index) in images" 
        :key="'indicator-' + index"
        :class="{ active: indImg === index }"
        @click="handleClick(index)"
      ></span>
    </div>
  </div>
</template>
 
<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}
 
.carousel img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}
 
.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}
 
.indicators span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}
 
.indicators span.active {
  background-color: #fff;
}
</style>