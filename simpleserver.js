var http=require('http')
var fs=require('fs')
var url=require('url')

http.createServer(function(req,res){

    var q=url.parse(req.url,true)

    if(q.pathname==='/'){
        res.write("main page")
        res.end()
    }else if(q.pathname==='/signup'){
        fs.readFile("signup.html",function(err,data){
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname==='/signupaction'){
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.write(q.query.fname)
        res.end()
    }else{
        res.write('error')
        res.end()
    }
}).listen(5000,() => console.log("started"))