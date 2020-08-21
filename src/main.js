import Vue from 'vue'

import api from './api/index'

import store from './store/index'
import i18n from './i18n/index'
import App from './App.vue'
import '../mock/index'

Vue.use(api) // 注册使用 api 模块

Vue.config.productionTip = false

new Vue({
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')
