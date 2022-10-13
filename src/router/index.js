import Vue from 'vue'
import VueRouter, { RouterLink } from 'vue-router'
import Login from "../components/login.vue"
import Home from "../components/home.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login', component: Login
    },
    {
      path: '/home', component: Home
    },
    // 重定向路由规则
    {
      path: '/', redirect: '/login'
    }
  ]
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router