// 本地存储工具类
const INFO_KEY = 'hm-shopping-user-info'

// 存储用户信息
export const getInfo = () => {
  const defaultInfo = {
    token: '',
    userInfo: {}
  }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultInfo
}

// 获取用户信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

// 删除用户信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
