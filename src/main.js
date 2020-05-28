import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// QRcode gnerator
import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)

// barcode generator
import VueBarcode from 'vue-barcode'
Vue.component('barcode', VueBarcode)

//cookies
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
