const XHR = new XMLHttpRequest()

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
        }
    }
}

const options = {
    method:'GET', // 请求方式
    url:'http://127.0.0.1', // 请求地址
    async:true // 是否开启异步请求
}
XHR.open(...options) 
// 发送请求
XHR.send()