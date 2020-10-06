import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tableuser',
          name: 'Quản Lý Người Dùng',
          component: () => import(/* webpackChunkName: "demo" */ './views/TableUser.vue')
        },
        {
          path: '/tableshop',
          name: 'Quản Lý Cửa Hàng',
          component: () => import(/* webpackChunkName: "demo" */ './views/TableShop.vue')
        },
        {
          path: '/tableshipper',
          name: 'Quản Lý Shipper',
          component: () => import(/* webpackChunkName: "demo" */ './views/TableShipper.vue')
        },
        {
          path: '/tableproducts',
          name: 'Quản Lý Sản Phẩm',
          component: () => import(/* webpackChunkName: "demo" */ './views/TableProducts.vue')
        },
        {
          path: '/addproduct',
          name: 'Thêm Sản Phẩm',
          component: () => import(/* webpackChunkName: "demo" */ './views/AddProduct.vue')
        },
        {
          path: '/tablebill',
          name: 'Quản Lý Hóa Đơn',
          component: () => import(/* webpackChunkName: "demo" */ './views/TableBill.vue')
        },
        {
          path: '/tableorder',
          name: 'Quản Lý Đơn Hàng',
          component: () => import(/* webpackChunkName: "demo" */ './views/TableOrder.vue')
        },
        {
          path: '/tablebanner',
          name: 'Quản Lý Banner',
          component: () => import(/* webpackChunkName: "demo" */ './views/TableBanner.vue')
        },
        {
          path: '/text',
          name: 'Quản Lý Banner',
          component: () => import(/* webpackChunkName: "demo" */ './views/text.vue')
        },
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
