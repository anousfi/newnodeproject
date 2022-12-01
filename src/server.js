let http=require('http')

http.createServer((req,res)=>{

    res.writeHead(200,'loaded with sucess')

    res.end('hello world')
}).listen('3000')

console.log(<h1>hello node</h1>)