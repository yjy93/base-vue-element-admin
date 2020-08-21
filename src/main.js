import Vue from 'vue'
import api from './api/index'

import App from './App.vue'

import '../mock/index'

Vue.use(api) // 注册使用 api 模块

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
