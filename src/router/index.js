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
    }
  ]
})

export default router
