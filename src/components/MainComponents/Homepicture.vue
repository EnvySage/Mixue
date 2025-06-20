<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
 
const indImg = ref(0);
const images = ref([
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.6gTO7-DbAbrAapcdcbjlHAHaFW?w=228&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
  'https://tse3-mm.cn.bing.net/th/id/OIP-C.kBFe_bzrddAuR9oNX7zwKAHaDt?w=318&h=174&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
  'https://tse3-mm.cn.bing.net/th/id/OIP-C.aZRs4lmRaqzCq0h2mR_YMQHaE8?w=296&h=197&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.d-bi48oMOSJAh8n2EZ6F2AHaEK?w=288&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
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