const express = require('express')
const app = express()

app.all('/server',(req,res)=>{
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
    res.send({
        status:201,
        value:'成功'
    })
})

app.listen(8004,() => {
    console.log('http://127.0.0.1:8004')
})