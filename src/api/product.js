import request from '@/utils/request'

// 获取商品列表
export const getProListAPI = (obj) => {
  const { categoryId, goodsName, page } = obj
  return request.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}

// 获取商品详情
export const getProDetailAPI = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}
