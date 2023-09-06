import Vue from 'vue'
import App from './App.vue'
import router from '../router/index'
import vueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(vueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
