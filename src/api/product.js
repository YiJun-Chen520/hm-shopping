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

// 获取商品评价
export const getProCommentAPI = (goodsId, limit = 3) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
