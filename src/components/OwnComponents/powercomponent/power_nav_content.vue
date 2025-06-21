<template>
  <div>
    <div class="iconfont" v-if="i.status === false">
      <span
        :class="i.icon"
        class="iconfont"
        :style="`color: ${randomColor4};filter: blur(${touming}px);z-index:0;font-size: 30px;`"
      ></span>
      <span
        class="iconfont"
        :class="lock"
        :style="`color: white;position:absolute;top: 0;left: 0;right: 0;z-index:1;font-weight: 600;font-size: 23px; `"
      ></span>
    </div>
    <div class="iconfont" v-else>
      <span
        :class="i.icon"
        class="iconfont"
        :style="`color: ${randomColor4};font-size: 30px;`"
      ></span>
    </div>
    <span class="power-for-name">{{ i.name }}</span>
    <span class="power-for-desc">{{ i.desc }}</span>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
    i: {
        type: Object,
        default: () => ({
            name: "",
            desc: "",
            icon: "",
            status: false,
        }),
    },
    touming: {
        type: Number,
        default: 0,
    },
    randomColor4: {
        type: String,
        default: "",
    },
    lock: {
        type: String,
        default: "",
    },
});
</script>

<style scoped>
.iconfont{
    /* font-size: 30px; */
    color: #749bfe;
    position: relative;
}
.power-for-name{
    font-size: 12px;
    color: #333333;
    margin-top: 5px;
    white-space: nowrap;
}
.power-for-desc{
    font-size: 10px;
    color: #999999;
    margin-top: 2px;
    white-space: nowrap;
}
</style>
