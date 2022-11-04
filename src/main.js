import Vue from 'vue'
// import router from '@router'
import store from '@state/store'
import VueApexCharts from 'vue-apexcharts'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

// Globally register all `_base`-prefixed components
// import '@components/_globals'

Vue.use(Vuex)

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
