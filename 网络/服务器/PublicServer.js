const express = require('express')
const app = express()

// 使用中间件解析post的请求体内容
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.post('/server',(req,res)=>{
    console.log('params',req.params)
    console.log('query',req.query)
    console.log('headers',req.headers)
    console.log('body',req.body)
    res.send({
        name:'cwh',
        age:20
    })
}) 

app.get('/request',(req,res)=>{
    // req.headers
    // req.query
    // req.body
    // req.params
    console.log('params',req.params)
    console.log('query',req.query)
    console.log('headers',req.headers)
    console.log('body',req.body)
    res.send({
        status:201,
        value:'成功'
    })
})

app.listen(8004,() => {
    console.log('http://127.0.0.1:8004')
})