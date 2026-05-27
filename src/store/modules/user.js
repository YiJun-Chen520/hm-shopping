import { getInfo, setInfo } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    // 用户权证信息
    userInfo: getInfo()
  },
  mutations: {
    // 更新用户权证信息
    setUserInfo (state, payload) {
      state.userInfo = payload
      setInfo(payload) // 存储用户权证信息到本地
    }
  },
  actions: {

  },
  getters: {

  }
}
