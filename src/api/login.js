// 登录相关接口
import request from '@/utils/request'

export const getPicCodeAPI = () => {
  // 获取图片验证码
  return request.get('/captcha/image')
}

export const getSMsgCodeAPI = (captchaCode, captchaKey, mobile) => {
  // 获取短信验证码
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

export const loginAPI = (mobile, smsCode) => {
  // 登录接口
  return request.post('/passport/login', {
    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode
    }
  })
}
