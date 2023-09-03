const XHR = new XMLHttpRequest()

/**
 * XHR的进度事件
 *  loadstart：接收响应时触发
 *  progress：接收响应时多次触发
 *  error：请求出错时触发
 *  abort：在调用 abort() 终止请求时触发
 *  load：在 readState 等于4时触发（响应结束时触发）
 *  loadend：通信完成时触发：在 error、abort、load 之后触发
 */


XHR.onreadystatechange = function() {
    /**
     * readyState：表示请求/响应的阶段
     *  0：未初始化（未调用 open 方法）
     *  1：已打开（调用 open 方法）
     *  2：已发送（调用 send 方法）
     *  3：接受部分响应中
     *  4：响应完成
     */
    if(this.readyState === 4) {
        /**
         * status：HTTP状态码
         *  1xx：请求成功但是要继续请求
         *  2xx：响应成功
         *  3xx：重定向
         *  4xx：一般是请求报文错误
         *  5xx：一般是服务器错误
         */
        if(XHR.status >= 200 && XHR.status < 300) {
            /**
             * responseText：响应体
             * responseXML：响应内容的类型为 "test/xml" 或 "application/xml"
             */
            return XHR.responseText
        }
    }
}
/**
 * 替代 onreadystatechange中 readyState == 4 的事件
 */
XHR.onload = function() {
    /**
     * status：HTTP状态码
     *  1xx：请求成功但是要继续请求
     *  2xx：响应成功
     *  3xx：重定向
     *  4xx：一般是请求报文错误
     *  5xx：一般是服务器错误
     */
    if(XHR.status >= 200 && XHR.status < 300) {
        /**
         * responseText：响应体
         * responseXML：响应内容的类型为 "test/xml" 或 "application/xml"
         */
        console.log(XHR.responseText) 
    }
}

const options = {
    method:'GET', // 请求方式
    url:'http://127.0.0.1', // 请求地址
    async:true // 是否开启异步请求
}
// 设置请求行等配置项
XHR.open(...options) 

// 设置请求头
XHR.setRequestHeader('headerName','name')
XHR.setRequestHeader('Content-Type', 'application/x-www-formurlencoded')

// 发送请求
XHR.send()