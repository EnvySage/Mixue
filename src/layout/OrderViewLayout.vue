<template>
    <div class="scroll-container">
        <div class="header">
            {{  }}
            <TopBar class="top-bar"></TopBar>
            <destinationCard class="destination-card"></destinationCard>
            <breadTitle class="bread-title-container"></breadTitle>
        </div>
        <div class="scroll">
            <router-view class="order-view"></router-view>
        </div>
    </div>
    <ShopCar v-if="ShowCar"></ShopCar>
    <MainNav></MainNav>
</template>

<script setup>
import breadTitle from '@/components/OrderComponents/breadTitle.vue';
import TopBar from '@/components/OrderComponents/topBar.vue';
import destinationCard from '@/components/OrderComponents/destinationCard.vue';
import MainNav from '../components/MainNav.vue';
import ShopCar from '@/components/ShopCarComponent.vue';
import { ref, onMounted, watch } from 'vue';
import { useShopCar } from '@/stores/shopCar';
import { useProductStore } from '@/stores/products';
import { useSnackStore } from '@/stores/snack';

const shopCar = useShopCar();
const productStore = useProductStore();
const snackStore = useSnackStore();

const ShowCar = ref(false);
const cartlist = ref([]);
onMounted(async () => {
    await productStore.getAll();
    await snackStore.getAll();
    cartlist.value = shopCar.getCartItems(); 
    if (cartlist.value.length > 0) {
        ShowCar.value = true;
    }
});
watch(
    () => shopCar.getCartItems(), 
    (newVal) => {
        cartlist.value = newVal;
        if (newVal.length > 0 && ShowCar.value === false) {
            ShowCar.value = true;
        } else if (newVal.length === 0 && ShowCar.value === true) {
            ShowCar.value = false;
        }
    },
    { deep: true }
);
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background-color: white;
}
.order-view {
    width: 100%;
    height: 100%;
}
.scroll-container {
    height: 100vh;
    overflow: hidden;
}
.scroll {
    position: absolute;
    top: 220px;
    bottom: 50px;
}
</style>
