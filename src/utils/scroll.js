const calculateScrollIndex = () => {
    for (let index = 0; index < jsonData.value.length; index++) {
        const item = jsonData.value[index];
        if (item.min_exp <= exp.value && exp.value <= item.max_exp) {
            return index;
        }
    }
    return 0; // 默认滚动到第一个容器
};
const scrollToIndex = (index) => {
    if (powerItemContainers.value && powerItemContainers.value[index]) {
        powerItemContainers.value[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};