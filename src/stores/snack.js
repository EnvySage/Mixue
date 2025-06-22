import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useSnackStore = defineStore('snacks', () => {
  const snacks = ref([])
  const snack = ref({})
  const getAll=async()=>{
    let res =await fetch('/snack.json')
    let data =await res.json()
    snacks.value=data.productList
    return data.productList
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

  return { snack,snacks,getAll,getById }
})
