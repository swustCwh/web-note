/**
 * @link Axios官方文档：https://www.axios-http.cn/
 */

/**
 * 请求方式：
 *  axios.request(config)
 *  axios.get(url[, config])
 *  axios.delete(url[, config])
 *  axios.head(url[, config])
 *  axios.options(url[, config])
 *  axios.post(url[, data[, config]])
 *  axios.put(url[, data[, config]])
 *  axios.patch(url[, data[, config]])
 */
const axios = require('axios')

// 初始化配置
const instance = axios.create({
    baseURL:'http://127.0.0.1:8004',
    timeout:1000,
    headers:{
        'user':'cwh'
    }
})

instance.get('/request',{

}).then(res => {
    console.log(res.data)
})

instance({
    method: 'get',
    url: '/request'
}).then(res=>{
    console.log(res.data)
})