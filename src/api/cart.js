import request from '@/utils/request'

// 加入购物车
export const addCartAPI = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

// 获取购物车列表
export const getCartListAPI = () => {
  return request.get('/cart/list')
}
