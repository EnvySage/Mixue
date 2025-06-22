<template>
<div>

  <div class="product-grid">
    <doubleCard v-for="double in getFilteredProductList()" :key="double.productId" :double="double" @click="gotoDouble(double.productId)"></doubleCard>
  </div>
  <div class="white"></div>
</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useProductStore } from "@/stores/products";
import { useRouter } from "vue-router";
import doubleCard from "@/components/OrderComponents/doubleCard.vue";
const router = useRouter();
const productStore = useProductStore();
const doubleList = ref([]);
onMounted(async () => {
  await productStore.getAll();
  doubleList.value = productStore.products;
});
const gotoDouble = (id) => {
  router.push({ name: "doubleDetail", params: { id: id } });
};

const getFilteredProductList = () => {
    return productStore.products.filter(product => product.category ==="双杯系列");
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 两列 */
  gap: 20px; 
  padding: 20px;
}
.white {
  background-color: #fff;
  height: 100px;
}
</style>