/**
 * @link Axios官方文档：https://www.axios-http.cn/
 */

const axios = require('axios')

// axios.get('http://127.0.0.1:8004/request').then(res => {
//     console.log(res.data)
// })

axios({
    method: 'get',
    url: 'http://127.0.0.1:8004/request'
}).then(res=>{
    console.log(res.data)
})