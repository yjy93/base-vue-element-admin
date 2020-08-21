/**
 * @author: Gene
 * @date: 2020-08-21 10:24:30
 * @Email： Genejob@163.com
 * @description: 挂载 api 模块到 vue的原型上
 */
import api from './api'

export default function myApi(Vue) {
    Object.defineProperty(Vue.prototype, '$api', {
        get() {
            return api
        }
    })
}

