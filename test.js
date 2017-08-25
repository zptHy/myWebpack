/**
 * Created by Administrator on 2017/8/24.
 */
var http=require('http');
http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.end("跑起来了\n是吧");
}).listen(8887);

console.log('Server runing at http://127.0.0.1:8887');