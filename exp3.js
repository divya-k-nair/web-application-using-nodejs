var t=require('express')
var d=t()
d.get('/log',(req,res)=>{
    res.send("hello everyone")
})
d.get('/what',(req,res)=>{
    res.send("smile")
})
d.get('/why',(req,res)=>{
    res.send("dart")
})
d.get('/how',(req,res)=>{
    res.send("be happy")
})
d.listen(3000,()=>{
    console.log("server started at http://localhost:3000")
})