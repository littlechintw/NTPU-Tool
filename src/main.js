import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// barcode generator
import VueBarcode from 'vue-barcode'
Vue.component('VueBarcode', VueBarcode)

// cookies
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

// GA
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-167881827-1',
  router,
  checkDuplicatedScript: true
})

// vue-google-charts
import VueGoogleCharts from 'vue-google-charts'
Vue.use(VueGoogleCharts)

// json-viewer
import JsonViewer from 'vue-json-viewer'
Vue.use(JsonViewer)

// axios
import axios from 'axios'
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(vuetify)
// export default new vuetify({
//   icons: {
//     iconfont: 'md',
//   },
// })