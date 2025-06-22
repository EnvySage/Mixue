<template>
  <div>
    <img src="/src/img/main/red1.jpg" alt="">
    <button @click="goBack">&lt;</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style scoped>
div {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
}

img {
  width: 100%;
  height: 90%;
  object-fit: cover;
}

button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}
</style>