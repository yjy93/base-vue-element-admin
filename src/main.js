import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api/index'

import store from './store/index'
import i18n from './i18n/index'
import App from './App.vue'
import '../mock/index'

Vue.use(ElementUI)
Vue.use(api) // 注册使用 api 模块

Vue.config.productionTip = false

new Vue({
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')
