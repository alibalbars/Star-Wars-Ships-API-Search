import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Header from './components/Header.vue'
import CardList from './components/CardList.vue'
import ShipCard from './components/ShipCard.vue'

Vue.config.productionTip = false

Vue.component('Header', Header)
Vue.component('CardList', CardList)
Vue.component('ShipCard', ShipCard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
