<template>
    <div class="own-header">
        <span class="header"></span>
        <div class="header-phone"><h2>{{ phone }}</h2>
            <div class="header-badge">我的徽章:{{ num_badge }}/45</div>
        </div>
        <button :class="['header-right', { 'inactive': isInactive }]" @click="handleClick">{{ status }}</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const phone = ref('138******78')
    const num_badge = ref(10)
    const status = ref('签到')
    const isInactive = ref(false)
    const handleClick = () => {
        if (status.value === '签到') {
            status.value = '已签到'
            isInactive.value = true
        } else {
            return
        }
    }
</script>

<style scoped>
.own-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #fff;
    flex-direction: row;
}
.header {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url('https://img.icons8.com/color/48/000000/user-male.png');
    border-radius: 50%;
    background-color: rgb(214, 214, 214);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
h2{
    margin: 0px;
}
.header-phone {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
   
}
.header-badge {
    font-size: 14px;
    color: #999;
}
.header-right {
    position: relative;
    right: 0;
    margin-left: auto;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #ececec;
    color: #000000;
    font-size: 16px;
    cursor: pointer;
    min-width: 88px;
}
.inactive {
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
}
</style>