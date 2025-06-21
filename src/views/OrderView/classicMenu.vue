<template>
    <div class="classic-menu">
        <div class="side-bar">
        <div class="series-title" v-for="(title,index) in seriesTitle" :key="index"
            :class="{ active: index === selectedTitle }"
            @click="scrollToSection(index)">
             {{title}}
        </div>
        </div>
        <div class="menu-list" ref="menuList">
          <span>果茶系列</span>
          <div id="0" class="flag">a</div>
          <productItem v-for="(product,index) in getFilteredProductList(0)" :key="index" :product="product" @click="goToDetail(product.productId)"></productItem>
          <span>纯茶系列</span>
          <div id="1" class="flag">a</div>
          <productItem v-for="(product,index) in getFilteredProductList(1)" :key="index" :product="product" @click="goToDetail(product.productId)"></productItem>
          <span>奶茶特饮</span>
          <div id="2" class="flag">a</div>
          <productItem v-for="(product,index) in getFilteredProductList(2)" :key="index" :product="product" @click="goToDetail(product.productId)"></productItem>
          <span>冰激凌系列</span>
          <div id="3" class="flag">a</div>
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
const menuList = ref(null);

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

const scrollToSection = (index) => {
    updateSelectedTitle(index);
  const element = document.getElementById(index.toString());
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
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
  padding-bottom: 200px;
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
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
}
.menu-list .flag{
  background-color: transparent;
  color: black;
  line-height: 0;
  font-size: 0;
  border-bottom: 1px solid #cccccc;
}
.classic-menu{
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 0;
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