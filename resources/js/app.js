import Vue from 'vue'
import Main from './components/Main.vue'
import router from './router'
require('./bootstrap');


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Main)
}).$mount('#app')

