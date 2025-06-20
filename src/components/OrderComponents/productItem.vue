<template>
    <div class="product-item" >
        <img :src="`${product.product.imageUrl}`" alt="饮品图片">
        <div class="info">
            <div>
                <div class="title"><b>{{ product.product.name }}</b></div>
                <div class="desc">{{product.product.description}}</div>
            </div>
            <div class="price">￥{{product.product.price}}起</div>
        </div>
        <div class="btn">+</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const product = defineProps({
    product: {
        type: Object,
        default: null
    }
});
</script>

<style scoped>
.product-item {
    display: flex;
    height: 130px;
    width: 100%;
    position: relative;
}
img{
    height: 100%;
    width: 135px;
    object-fit: contain;
    border-radius: 10px;
}
.info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 15px 10px 15px;
}
.btn{
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ff6700;
    color: #fff;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
}
.desc{
    color: #999;
    font-size: 14px;
    line-height: 20px;
    margin-top: 5px;
}
</style>