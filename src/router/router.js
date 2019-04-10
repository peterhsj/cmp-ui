import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/Login"
import Home from "@/components/Home"
import Main from "@/components/pages/Main"
import aaa from "@/components/pages/aaa"

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/Main',
          name: 'Main',
          component: Main
        },
        {
          path: '/aaa',
          name: 'aaa',
          component: aaa
        }
      ]
    }
  ]
})

// router.push('/Main');

export default router
