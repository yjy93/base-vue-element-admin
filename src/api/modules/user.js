/**
 * @author: Gene
 * @date: 2020-08-21 10:36:04
 * @Email： Genejob@163.com
 * @description: user 模块接口
 */

import axios from '../axios'

export const getUser = (data) => {
    console.log('请求进来了 ');
    return axios({
        url: '/user/getUser',
        method: 'get',
        data,
    })
}
