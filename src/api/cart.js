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

// 更新购物车商品数量
export const changeCountAPI = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

// 删除购物车商品
export const delSelectAPI = (cartIds) => {
  return request.post('/cart/clear', {
    cartIds
  })
}
