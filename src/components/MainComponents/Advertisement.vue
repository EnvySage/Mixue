<template>
  <div class="page-content">
    <div class="sweet-news-container">
      <h2 class="sweet-news-title">甜蜜资讯</h2>
      <swiper 
        class="sweet-news-swiper" 
        :modules="[Autoplay]" 
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
      >
        <swiper-slide v-for="(item, index) in newsList" :key="index">
          <router-link :to="item.link" class="news-item">
            <img :src="item.image" :alt="item.alt" class="news-image">
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const newsList = [
  {
    image: '/src/img/main/adv1.png',
    alt: '雪王礼品卡企业采购专区',
    link: '/gift' 
  },
  {
    image: '/src/img/main/adv2.png',
    alt: '另一张甜蜜资讯',
    link: '/red' 
  }
];
</script>

<style scoped>
.page-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 60px;
  padding: 16px;
  background-color: #f5f5f5;
  z-index: 1;
  position: relative; 
}

.sweet-news-container {
  background-color: #fff;
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 60px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.sweet-news-title {
  color: #ff4d4f;
  font-size: 16px;
  margin-bottom: 12px;
}

.sweet-news-swiper {
  width: 100%;
  height: 160px; 
  border-radius: 8px;
  overflow: hidden;
}

.news-item {
  display: block;
  width: 100%;
  height: 100%;
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 8px;
}
</style>