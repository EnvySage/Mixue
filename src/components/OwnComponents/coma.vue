<template>
    <div class="own-header">
        <span class="header"></span>
        <div class="header-phone"><h3>{{ phone }}</h3>
            <button class="header-badge">我的徽章:{{ num_badge }}/45 ></button>
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
    width: auto;
    margin: 20px 10px;
    
    flex-direction: row;
}
.header {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-image: url('https://img.icons8.com/color/48/000000/user-male.png');
    border-radius: 50%;
    background-color: rgb(214, 214, 214);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
h3{
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
    border: none;
   background-color:transparent ;
    padding: 0;
    cursor: pointer;
}
.header-right {
    position: relative;
    right: 0;
    margin-left: auto;
    padding: auto 20px;
    border: none;
    border-radius: 4px;
    background-color: #ffffff;
    color: #000000;
    font-size: 14px;
    cursor: pointer;
    width: 64px;
}
.inactive {
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
}
</style>