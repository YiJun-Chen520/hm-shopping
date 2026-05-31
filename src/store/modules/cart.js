import { getCartListAPI, changeCountAPI, delSelectAPI } from '@/api/cart'
import { Toast } from 'vant'

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
    },

    // 设置商品数量
    setGoodsNum (state, payload) {
      const goods = state.cartList.find(item => item.goods_id === payload.goodsId)
      if (goods) {
        goods.goods_num = payload.goodsNum
      }
    }

  },
  actions: {
    // 获取购物车列表
    async getCartList (context) {
      const res = await getCartListAPI()
      console.log(res)
      res.data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', res.data.list)
    },

    // 修改商品数量
    async changeCount (context, payload) {
      const { goodsId, goodsNum, goodsSkuId } = payload
      // 本地更新商品数量
      context.commit('setGoodsNum', {
        goodsId,
        goodsNum
      })
      // 后台更新商品数量
      await changeCountAPI(goodsId, goodsNum, goodsSkuId)
    },

    async delSelect (context) {
      // 获取选中的商品的id数组
      const cartIds = context.getters.selCartList.map(item => item.id)
      await delSelectAPI(cartIds)
      Toast.success('删除成功')
      // 重新获取购物车列表
      context.dispatch('getCartList')
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
