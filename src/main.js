import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Flutterwave from  'flutterwave-vue-v3'


Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-05ad74f2c0bea0d2740fe8faabeee475-X' } )

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
