export default {
  data () {
    return {}
  },
  methods: {
    loginConfirm () {
      // 判断token是否存在
      if (!this.$store.getters.token) {
        // 没有token，跳转到登录页
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要登录才能继续操作哦',
          confirmButtonText: '去登录',
          cancelButtonText: '再逛逛'
        }).then(() => {
          // 跳转到登录页
          this.$router.replace({
            path: '/login',
            query: {
              backUrl: this.$route.fullPath // 登录成功后跳转回当前页面完整路径
            }
          })
        }).catch(() => {
          // 取消登录

        })

        return true
      }
      return false
    }
  }
}
