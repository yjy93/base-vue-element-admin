import Mock from 'mockjs'
import {baseUrl} from '../config/index'

import * as user from './modules/user'

// 1. 开启/关闭 所有模块拦截, 通过 isOpenMock 参数设置
// 2. 开启/关闭某个业务模块拦截, 通过 createMock 方法参数设置
// 3. 开启/关闭业务模块中摸个请求的拦截, 通过函数返回对象中的 isOpen 属性设置
let isOpenMock = true
// let isOpenMock = false
createMock(user, isOpenMock)

/**
 *  创建 mock
 * @param module
 * @param isOpen
 */
function createMock(module, isOpenMock = true) {
    console.log(`%c创建 mockjs 执行了 ...`, "color:red");
    if (isOpenMock) {
        for (let key in module) {
            ((res) => { // res 请求的每个模块内部的返回结果
                console.log(`%c res`, "color:res", res);
                if (res.isOpen !== false) {
                    let url = baseUrl + res.url
                    // if (!url.endsWith('/') && res.url.startsWith('/')) {
                    //     url = url + res.url
                    // }
                    console.log('0000', url);
                    Mock.mock(new RegExp(url), res.type, (opts, a) => {
                        console.log(111111, opts, a);
                        opts['data'] = opts.body ? JSON.parse(opts.body) : null
                        delete opts.body
                        return res.data
                    })
                }
            })(module[key]({}) || {})
        }
    }
}
