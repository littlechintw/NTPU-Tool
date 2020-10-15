import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false

// global config
import global_ from './components/Global.vue'
Vue.prototype.GLOBAL = global_

// QRcode gnerator
import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)

// barcode generator
import VueBarcode from 'vue-barcode'
Vue.component('barcode', VueBarcode)

// cookies
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

Vue.use(Vuetify)

// GA
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-167881827-1',
  router,
  checkDuplicatedScript: true
})

// Vue-Resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
})
