<template>
    <div class="game-machine">
        <h1 class="title">海底游戏机</h1>
        <div class="coin-display">
            <span class="coin-icon">🍦</span>我的雪王币: {{ coins }}
        </div>
        <div class="prize-display">
            <div class="prize-wheel">
                <img v-if="currentPrize !== '谢谢参与'" :src="getPrizeImage(currentPrize)" alt="奖品" class="prize-image">
            </div>
            <h2 class="prize-title">当前奖品: {{ currentPrize }}</h2>
        </div>
        <button @click="startDrawing" :disabled="coins < 18" class="draw-button">
            {{ coins < 18 ? '雪王币不足' : '点击抽奖' }} </button>
                <transition name="fade">
                    <div v-if="showResult" class="result-message">
                        {{ resultText }}
                    </div>
                </transition>
                <div class="prize-frame">

                    <div class="prizes-list">
                        <div v-for="(prize, index) in prizesList" :key="index" class="prize-item">
                            <img :src="prize.image" alt="奖品">
                            <p>{{ prize.name }}</p>
                        </div>
                    </div>
                </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const coins = ref(215);
const prizes = [
    '雪王流光杯',
    '雪王硅胶包',
    '雪王百变盲盒',
    '雪王溜溜球',
    '谢谢参与'
];
const currentPrize = ref('');
const showResult = ref(false);
const resultText = ref('');

const prizesList = [
    { name: '雪王流光杯', image: '/src/img/main/bei.png' },
    { name: '雪王硅胶包', image: '/src/img/main/bao.png' },
    { name: '雪王百变盲盒', image: '/src/img/main/cai.png' },
    { name: '雪王溜溜球', image: '/src/img/main/liu.png' }
];

const prizeImages = {
    '雪王流光杯': '/src/img/main/bei.png',
    '雪王硅胶包': '/src/img/main/bao.png',
    '雪王百变盲盒': '/src/img/main/cai.png',
    '雪王溜溜球': '/src/img/main/liu.png'
};

const getPrizeImage = (prize) => {
    return prizeImages[prize] || '';
};

const startDrawing = () => {
    if (coins.value >= 18) {
        coins.value -= 18;
        const randomIndex = Math.floor(Math.random() * prizes.length);
        currentPrize.value = prizes[randomIndex];
        resultText.value = `恭喜你获得了: ${currentPrize.value}`;
        showResult.value = true;
        setTimeout(() => {
            showResult.value = false;
        }, 2000);
    } else {
        resultText.value = '雪王币不足';
        showResult.value = true;
        setTimeout(() => {
            showResult.value = false;
        }, 2000);
    }
};
</script>

<style scoped>
.game-machine {
    text-align: center;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    background-image: url('/src/img/main/sea.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    max-width: none;
    margin: 0;
    border-radius: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.prize-frame {
    /* 外层木头色边框 */
    border: 20px solid #8B4513;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    /* 内层深蓝色画框 */
    outline: 10px solid #00008B;
    outline-offset: -10px;
    background-color: #ffffff;
    margin: 20px auto;
    display: inline-block;
}

.title {
    color: #00bfff;
    font-size: 36px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.coin-display {
    margin: 10px 0;
    font-size: 20px;
    color: #333;
    background: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 10px;
}

.coin-icon {
    margin-right: 5px;
}

.prize-display {
    margin: 20px 0;
    position: relative;
}

.prize-wheel {
    width: 250px;
    height: 250px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.prize-image {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: contain;
    animation: float 3s ease-in-out infinite;
}

.prize-title {
    font-size: 24px;
    margin-top: 10px;
}

.draw-button {
    padding: 15px 40px;
    background-color: #ffa500;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.draw-button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

.draw-button:hover:not(:disabled) {
    background-color: #ffb74d;
}

.result-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.9);
    color: #00bfff;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    font-size: 20px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.prizes-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
}

.prize-item {
    margin: 10px;
    text-align: center;
}

.prize-item img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: contain;
}

@keyframes float {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}
</style>