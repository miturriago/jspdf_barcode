import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueBarcode from 'vue-barcode'

Vue.component('JsBarcode', VueBarcode)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
