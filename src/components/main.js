import Vue from 'vue'
import App from './App.vue'
import Hexagon from './src/hexagon'

Vue.component('vue-hexagon', Hexagon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

