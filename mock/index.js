/**
 * @author: Gene
 * @date: 2020-08-21 10:12:12
 * @Email： Genejob@163.com
 * @description: mockjs拦截
 */
import Mock from 'mockjs'

import * as user from './models/user'
import * as list from './models/list'

// 对某个模块要开启 mock 拦截, 就把这个模块存进数组里.
const models = [
    user,
    list
]

models.forEach((model) => {
    // 如果所有模块都不再开启 mock 拦截,isOpen置为 false
    createMock(model, true)
})

/**
 * @param model 单独的某个模块
 * @param isOpen 是否开启mock 拦截
 */
function createMock(model, isOpen = false) {
    if (isOpen) {
        for (let key in model) { // 循环遍历每一个 model 的方法
            (function (res) {
                Mock.mock(res.url, res.type, function (options) {
                    const {url, type, body} = options
                    return res.data
                })
            })(model[key]() || {})
        }
    }
}
