<template>

    <div class="feature-container">
        <div class="feature-frame">
            <router-link to="/Order" class="feature-item">
                <img src="/src/img/main/wait.png" alt="到店自取">
                <h3>到店自取</h3>
                <p>下单免排队</p>
                <span class="activity-tag" v-if="showPickupTag">领30元券包</span>
            </router-link>

            <router-link to="/Order" class="feature-item">
                <img src="/src/img/main/deliver.png" alt="雪王外送">
                <h3>雪王外送</h3>
                <p>甜蜜送到家</p>
                <span class="activity-tag" v-if="showDeliveryTag">周五秒免单券</span>
            </router-link>
        </div>


        <div class="bottom-features">
            <router-link to="/giftcard" class="bottom-item">
                <img src="/src/img/main/card.png" alt="礼品卡">
                <p>礼品卡</p>
                <p class="sub-desc">送TA心意</p>
            </router-link>

            <router-link to="/red" class="bottom-item">
                <img src="/src/img/main/packet.png" alt="进群有礼">
                <p>进群有礼</p>
                <p class="sub-desc">周四抽免单</p>
            </router-link>

            <router-link to="/daily" class="bottom-item">
                <img src="/src/img/main/chou.png" alt="每日抽奖">
                <p>每日抽奖</p>
                <p class="sub-desc">会员免费抽</p>
            </router-link>

        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';


const showPickupTag = ref(true);
const showDeliveryTag = ref(true); 
</script>

<style scoped>
.feature-container {
    padding: 16px;
    background-color: #fff;
}

.feature-frame {
    display: flex;
    justify-content: space-around;
    border: 1px solid #f0f0f0;
    border-radius: 12px;
    padding: 16px 0;
    margin-bottom: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 15px;
}

.feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
}

.feature-item img {
    width: 480x;
    height: 80px;
    margin-bottom: 8px;
}

.feature-item h3 {
    font-size: 14px;
    margin: 4px 0;
}

.feature-item p {
    font-size: 12px;
    color: #666;
    margin: 4px 0;
}

.activity-tag {
    font-size: 10px;
    color: #ff6b6b;
    border: 1px solid #ff6b6b;
    border-radius: 4px;
    padding: 2px 6px;
    margin-top: 4px;
}

.bottom-features {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
    padding-top: 12px;
    border-top: 1px solid #f0f0f0;
}

.bottom-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    padding: 8px 0;
    text-decoration: none;
    color: inherit;
}

.bottom-item img {
    width: 32px;
    height: 32px;
    margin-bottom: 4px;
}

.bottom-item p {
    font-size: 12px;
    margin: 2px 0;
}

.sub-desc {
    font-size: 10px;
    color: #999;
}
</style>