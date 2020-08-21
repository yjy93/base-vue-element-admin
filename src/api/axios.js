import axios from 'axios'

import config from './config'

export default function (options) {
    console.log(' 封装的axios ----', options);
    return new Promise((resolve, reject) => {
        // 创建一个 axios实例 axiosIns
        const axiosIns = axios.create({
            baseURL: config.baseUrl,
            timeout: config.timeout,
            headers: config.headers,
            withCredentials: config.withCredentials,
        })

        // 请求拦截器
        axiosIns.interceptors.request.use(
            (config) => {
                console.log(`%c 请求拦截器`, "color:red", config);
                // resolve(config)
                return config

            },
            (error) => {
            }
        )

        // 相应拦截器
        axiosIns.interceptors.response.use(
            (response) => {
                console.log('相应拦截器 =====>>', response);
                return response.data
            },
            (error) => {
                return reject(error)
            }
        )

        // 处理请求
        axiosIns(options).then((res) => {
            console.log('处理请求 00000000000', res);
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

