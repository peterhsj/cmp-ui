import Vue from 'vue'
import Router from 'vue-router'
import Main from "@/components/Main"
import Home from "@/components/Home"
import Dashboard from "@/components/pages/Dashboard"
import aaa from "@/components/pages/aaa"

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/Dashboard',
          name: 'Dashboard',
          component: Dashboard
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
