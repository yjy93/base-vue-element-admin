/**
 *  user 模块
 */

export function getUser() {
    return {
        url: '/user/getUser',
        type: 'post',
        data: {
            "code": 200,
            "msg": '请求成功了',
            "data": 1
        }
    }
}
