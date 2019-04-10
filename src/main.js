import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './assets/styles/reset.css'
// import './assets/styles/border.css'
import './assets/styles/public.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
