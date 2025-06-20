<template>
    <div class="classic-menu">
        <div class="side-bar">
        <div class="series-title" v-for="(title,index) in seriesTitle" :key="index"
            :class="{ active: index === selectedTitle }"
            @click="updateSelectedTitle(index)">
           <a :href="`#${index}`">
             {{title}}
           </a> 
        </div>
        </div>
        <div class="menu-list">
          <span id="0">果茶系列</span>
          <productItem v-for="(product,index) in getFilteredProductList(0)" :key="index" :product="product" @click="goToDetail(product.productId)"></productItem>
          <span id="1">纯茶系列</span>
          <productItem v-for="(product,index) in getFilteredProductList(1)" :key="index" :product="product" @click="goToDetail(product.productId)"></productItem>
          <span id="2">奶茶特饮</span>
          <productItem v-for="(product,index) in getFilteredProductList(2)" :key="index" :product="product" @click="goToDetail(product.productId)"></productItem>
          <span id="3">冰激凌系列</span>
          <productItem v-for="(product,index) in getFilteredProductList(3)" :key="index" :product="product" @click="goToDetail(product.productId)"></productItem>
        </div>
    </div>
</template>

<script setup>
import productItem from '@/components/OrderComponents/productItem.vue';
import { useProductStore } from '@/stores/products';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
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

const getFilteredProductList = (index) => {
    return productStore.products.filter(product => product.category === seriesTitle.value[index]);
};

const goToDetail = (id) => {
    router.push({ name: 'DetailsView', params: { id } });
}
</script>

<style scoped>
.menu-list{
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left:5px ;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  padding-bottom: 100px;
  scroll-behavior: smooth;
}

.menu-list::-webkit-scrollbar {
  width: 3px; /* 滚动条宽度 */
}

.menu-list::-webkit-scrollbar-track {
  background: #f1f1f1; /* 滚动条轨道背景颜色 */
}

.menu-list::-webkit-scrollbar-thumb {
  background: #af1414; /* 滚动条滑块颜色 */
  border-radius: 4px; /* 滑块圆角 */
}

.menu-list::-webkit-scrollbar-thumb:hover {
  background: #555; /* 鼠标悬停时滑块颜色 */
}
.menu-list span{
  font-size: 18px;
  font-weight: bold;
}
.classic-menu{
    display: flex;
    flex-direction: row;
    width: 100%;
}
.side-bar{
    width: 20%;
    background-color: var(--text-background-color);
    height: 100%;
    overflow: hidden;
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