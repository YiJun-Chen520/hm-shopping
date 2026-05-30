import { getCartListAPI } from '@/api/cart'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    // 获取购物车列表
    setCartList (state, payload) {
      state.cartList = payload
    },

    // 购物车列表多选框状态
    toggleCheck (state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      if (goods) {
        goods.isChecked = !goods.isChecked
      }
    },

    // 全选框状态
    toggleAllChecked (state, isChecked) {
      state.cartList.forEach(item => {
        item.isChecked = isChecked
      })
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
    },

    // 判断是否全选
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}
