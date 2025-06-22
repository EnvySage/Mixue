import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('orders', () => {
  const orders = ref([])
  const currentOrderId = ref(0) // 初始化订单ID计数器

  const currentOrder = ref({ id: null, productList: [] })

  const createOrder = async (cartProducts) => {
    if (!cartProducts || !cartProducts.length) {
      console.error('购物车为空，无法创建订单')
      return
    }

    // 每次创建订单时，订单ID自增
    currentOrderId.value += 1
    const orderId = currentOrderId.value

    // 设置当前订单的产品列表和ID
    currentOrder.value.id = orderId
    currentOrder.value.productList = cartProducts

    // 添加订单到订单列表
    orders.value.push({ id: orderId, productList: currentOrder.value.productList })

    console.log('订单已创建：', currentOrder.value)

    return currentOrder.value
  }

  const getAllOrders = () => {
    console.log('获取所有订单：', orders.value)
    return orders.value
  }

  const getOrderById = (orderId) => {
    const order = orders.value.find(item => item.id === orderId)
    console.log('获取订单：', order)
    return order
  }

  return {
    orders,
    currentOrder,
    createOrder,
    getAllOrders,
    getOrderById,
  }
})
