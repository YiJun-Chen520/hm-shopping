import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Login from '@/views/login'
import MyOrder from '@/views/myorder'
import Pay from '@/views/pay'
import ProDetail from '@/views/prodetail'
import Search from '@/views/search'
import Home from '@/views/layout/home.vue'
import Cart from '@/views/layout/cart.vue'
import Category from '@/views/layout/category.vue'
import User from '@/views/layout/user.vue'
import List from '@/views/search/list.vue'

import store from '@/store'
import { Toast } from 'vant'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/cart',
          component: Cart
        },
        {
          path: '/category',
          component: Category
        },
        {
          path: '/user',
          component: User
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/myorder',
      component: MyOrder
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/prodetail/:id',
      component: ProDetail
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/searchlist',
      component: List
    }
  ]
})

// 权限拦截
const authUrl = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  if (!authUrl.includes(to.path)) {
    // 不需要登录的页面，直接放行
    next()
    return
  }

  // 需要登录的页面，判断是否已经登录
  const token = store.getters.token
  if (token) {
    // 已经登录，直接放行
    next()
  } else {
    // 没有登录，跳转到登录页面
    Toast('请先登录')
    next('/login')
  }
})

export default router
