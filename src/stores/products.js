import { ref} from 'vue'
import { defineStore } from 'pinia'
import { useShopCar } from './shopCar';
import ProdutsList from '../data/ProductList.json'
export const useProductStore = defineStore('products', () => {
  const products = ref([])
  const product = ref({})
  const getAll=()=>{
    let res =ProdutsList
    let data = res
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
