/**
 *  user 模块
 */

export function getUser() {
    console.log(`%c user模块执行了`, "color:red");
    return  {
        url: '/user/getUser',
        type: 'post',
        data: {
            "code": 200,
            "msg": null,
            "data": 1
        }
    }
}
