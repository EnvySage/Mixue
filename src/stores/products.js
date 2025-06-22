import { ref} from 'vue'
import { defineStore } from 'pinia'
import { useShopCar } from './shopCar';

export const useProductStore = defineStore('products', () => {
  const products = ref([])
  const product = ref({})
  const getAll=async()=>{
    let res =await fetch('/ProductList.json')
    let data =await res.json()
    products.value=data.productList
    return data.productList
  }
  const getById=async(ID)=>{
   if(!products.value.length){
    await getAll()
   } 
    let res=products.value.find(item=>item.productId==ID)
    product.value=res
    console.log('getById',res);
    return res
 }
  const addProductToCart = (id, num) => {
    const shopCar = useShopCar();
    shopCar.addToCart(id, num, 'product'); // 传递 type 属性为 'product'
  };
  return { product,products,getAll,getById,addProductToCart }
})
