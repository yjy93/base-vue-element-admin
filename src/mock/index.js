import Mock from 'mockjs'
import {baseUrl} from '../config/index'

import * as user from './modules/user'
import * as list from './modules/list'

let isOpen = true
// let isOpen = false
createMock(user, isOpen)
createMock(list, isOpen)

function createMock(module, isOpen = true) {
  if (isOpen) {
    for (let key in module) {
      ((res) => {
        const {url, type, data} = res
        Mock.mock(url, type || 'get', (options) => {
          console.log('9999', options);
          return data
        })
      })(module[key]() || {})
    }
  }
}
