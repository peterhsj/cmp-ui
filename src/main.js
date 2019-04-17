import Vue from 'vue'
import App from './App.vue'
// import VueI18n from 'vue-i18n'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import cnLocale from 'element-ui/lib/locale/lang/zh-CN'
// import twLocale from 'element-ui/lib/locale/lang/zh-TW'
// import Locales from 'element-ui/lib/locale'
import router from './router/router'
import store from './store/store'
// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Default setting
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/public.css'

// vue-fontawesome
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.config.productionTip = false


// Vue.config.lang = 'zh-CN'
// Vue.locale('zh-CN', cnLocale)
// Vue.locale('zh-TW', twLocale)
// Vue.locale('en', enLocale)
// 自动设置语言
// const navLang = navigator.language;
// const localLang = (navLang === 'zh-CN' || navLang === 'zh-TW' || navLang === 'en-US') ? navLang : false;
// const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';
// Vue.config.lang = lang;
// Vue.config.productionTip = false;
// // 多语言配置
// const locales = Locales;
// const mergeCN = Object.assign(cnLocale, locales['zh-CN']);
// const mergeTW = Object.assign(twLocale, locales['zh-TW']);
// const mergeEN = Object.assign(enLocale, locales['en-US']);
// Vue.locale = () => {};
// const i18n = new VueI18n({
//   locale: 'en-US', // 语言标识
//   messages: {
//     'zh-CN': mergeCN, // 中文语言包
//     'zh-TW': mergeTW, // 中文语言包
//     'en-US': mergeEN // 英文语言包
//   },
// })

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
// .$mount('#app')
