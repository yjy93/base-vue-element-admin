/**
 * @author: Gene
 * @date: 2020-08-21 10:50:49
 * @Email： Genejob@163.com
 * @description: axios 请求的一个相关配置
 */

import {baseUrl} from "../config/index"

export default {
    baseUrl: baseUrl,
    // 请求头
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },

    // 超时时间
    timeout: 15000,
    withCredentials: true,
    // 返回数据类型
    responseType: 'json'
}
