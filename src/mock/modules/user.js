/**
 *  user 模块
 */

export function getUser() {
    console.log(`%c user模块执行了`, "color:red");
    return  {
        url: '/user/getUser',
        type: 'get',
        data: {
            "code": 200,
            "msg": null,
            "data": 1
        }
    }
}
