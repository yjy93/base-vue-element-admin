export function getList() {
  console.log(`%c list`, "color:red");
  return {
    url: '/list/getList',
    type: 'get',
    data: {
      "code": 200,
      "msg": null,
      "data": 'list 数据'
    }
  }
}
