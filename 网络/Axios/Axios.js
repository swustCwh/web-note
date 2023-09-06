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
        'user':'cwh',
    }
})


/**
 * post 请求
 *  设置 content-type
 *      1、application/x-www-form-urlencoded：表单数据
 *      2、multipart/form-data：适用文件上传
 *      3、application/json：JSON数据
 * 
 */
// 设置请求体
const body = {
    user:'cwh',
    age:20
}
const config  = {
    headers:{
        'content-type':'application/x-www-form-urlencoded'
    }
}
instance.post('/server',body,config)
.then(res => {
    console.log(res.data)
})


/**
 * 通用请求格式
 */
// instance({
//     method: 'get',
//     // 路径参数
//     url: '/request/params/name',
//     // 请求体参数
//     data:{
//         name:'name'
//     },
//     // 查询字符串参数
//     params:{
//         data:'params'
//     },
//     headers:{
//         data:'header'
//     }
// }).then(res=>{
//     console.log(res.data)
// })