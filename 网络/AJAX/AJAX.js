
/**
 * 构造函数接收两个参数
 *      url：网络地址、async：是否开启异步
 */
const url = 'http://127.0.0.1'
const async = true
const XHR = new XMLHttpRequest(url,async)

XHR.onreadystatechange = function() {
    if(this.readyState === 4) {
        // 表示请求成功
        console.log(this.responseText)
    }
}

XHR.open('GET')
// 发送请求
XHR.send()