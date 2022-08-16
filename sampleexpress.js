const express=require('express')
const path=require('path')
const app=express()





app.use(function(req,res,next){
    console.log("Started")
    next()
})

app.get('/signup',function(req,res,next){
    res.sendFile(path.join(__dirname,'signup.html'))
console.log(app.quert)
next()
})

app.use(function(req,res){
    console.log("end")
})

app.post('/signup',function(req,res){
    res.send("hi")
})


app.listen(3000,function(){
    console.log(__filename)
    console.log('started server')
})