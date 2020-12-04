import Vue from 'vue'
import App from './App.vue'
import rabbitUi from './packages/index'
Vue.use(rabbitUi);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
