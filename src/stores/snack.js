import { ref} from 'vue'
import { defineStore } from 'pinia'
import { useShopCar } from './shopCar';

export const useSnackStore = defineStore('snacks', () => {
  const snacks = ref([])
  const snack = ref({})
  const getAll=async()=>{
    let res =await fetch('/snack.json')
    let data =await res.json()
    snacks.value=data.snackList
    return data.snackList
  }
  const getById=async(ID)=>{
   if(!snacks.value.length){
    await getAll()
   } 
    let res=snacks.value.find(item=>item.productId==ID)
    snack.value=res
    console.log('getById',res);
    return res
 }
  const addSnackToCart = (id, num) => {
    const shopCar = useShopCar();
    shopCar.addToCart(id, num, 'snack'); // 传递 type 属性为 'snack'
  };
  return { snack,snacks,getAll,getById,addSnackToCart }
})
