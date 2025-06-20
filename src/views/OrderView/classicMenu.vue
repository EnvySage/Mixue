<template>
    <div class="classic-menu">
        <div class="side-bar">
        <div class="series-title" v-for="(title,index) in seriesTitle" :key="index"
            :class="{ active: index === selectedTitle }"
            @click="updateSelectedTitle(index)">
            {{title}}
        </div>
        </div>
        <div class="menu-list">
          <productItem v-for="(product,index) in productList" :key="index" :product="product"></productItem>
        </div>
    </div>
</template>

<script setup>
import productItem from '@/components/OrderComponents/productItem.vue';
import { useProductStore } from '@/stores/products';
import { onMounted } from 'vue';
import { ref } from 'vue';

const seriesTitle = ref(['果茶系列','纯茶系列','奶茶特饮','冰激凌系列'])
const selectedTitle = ref(0);

const updateSelectedTitle = (index) => {
    selectedTitle.value = index;
};
const productStore = useProductStore();
const productList = ref([]);
onMounted(async() => {
 await productStore.getAll();
 productList.value = productStore.products;
});


</script>

<style scoped>
.menu-list{
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left:5px ;
}
.classic-menu{
    display: flex;
    flex-direction: row;
    width: 100%;
}
.side-bar{
    width: 20%;
    background-color: var(--text-background-color);
    height: 100vh;
}
.series-title{
    position: relative;
    font-size: 16px;
    text-align: center;
    padding: 20px 0;
}
.series-title.active{
    position: relative;
    font-size: 16px;
    text-align: center;
    padding: 20px 0;
    background-color: white;
}

.series-title::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 25%;
    width: 2px;
    height: 50%;
    background-color: transparent;
}
.series-title.active::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 25%;
    width: 2px;
    height: 50%;
    background-color: red;
}
</style>