import { getCartListAPI } from '@/api/cart'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList (state, payload) {
      state.cartList = payload
    }
  },
  actions: {
    async getCartList (context) {
      const res = await getCartListAPI()
      console.log(res)
      res.data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', res.data.list)
    }
  },
  getters: {
    // 商品总数
    cartTotal (state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
    },

    // 选中的商品
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },

    // 选中的商品总数
    selCartTotal (state, getters) {
      return getters.selCartList.reduce((sum, item) => {
        return sum + item.goods_num
      }, 0)
    },

    // 选中的商品总价，保留两位小数
    selCartPrice (state, getters) {
      return getters.selCartList.reduce((sum, item) => {
        return sum + item.goods_num * item.goods.goods_price_min
      }, 0).toFixed(2)
    }
  }
}
