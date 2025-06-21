<template>
<div>

  <div class="product-grid">
    <snackCard v-for="snack in snackList" :key="snack.productId" :snack="snack" @click="gotoSnack(snack.productId)"></snackCard>
  </div>
  <div class="white"></div>
</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useSnackStore } from "@/stores/snack";
import { useRouter } from "vue-router";
import snackCard from "@/components/OrderComponents/snackCard.vue";
const router = useRouter();
const snackStore = useSnackStore();
const snackList = ref([]);
onMounted(async () => {
  await snackStore.getAll();
  snackList.value = snackStore.snacks;

});
const gotoSnack = (id) => {
  router.push({ name: "snackDetail", params: { id: id } });
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