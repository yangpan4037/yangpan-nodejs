/**
 * 创建服务器
 * 测试访问地址：http://localhost:3000/export/export.html
 */
// var http = require('http');
// var fs = require('fs');
// var url = require('url');


// // 创建服务器
// http.createServer( function (request, response) {  
//    // 解析请求，包括文件名
//    var pathname = url.parse(request.url).pathname;
   
//    // 输出请求的文件名
//    console.log("Request for " + pathname + " received.");
   
//    // 从文件系统中读取请求的文件内容
//    fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//          console.log(err);
//          // HTTP 状态码: 404 : NOT FOUND
//          // Content Type: text/plain
//          response.writeHead(404, {'Content-Type': 'text/html'});
//       }else{	         
//          // HTTP 状态码: 200 : OK
//          // Content Type: text/plain
//          response.writeHead(200, {'Content-Type': 'text/html'});	
         
//          // 响应文件内容
//          response.write(data.toString());		
//       }
//       //  发送响应数据
//       response.end();
//    });   
// }).listen(3000);
// 
// 控制台会输出以下信息
// console.log('Server running at http://127.0.0.1:3000/');





var http=require('http');
var fs=require('fs');
var url=require('url');
var path=require('path');
var PORT=3000;
//添加MIME类型
var MIME_TYPE = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};

var server = http.createServer(serverStatic);
function serverStatic(req,res){
    var filePath;
    if(req.url==="/"){
        filePath =  "index.html";
    } else{
        filePath = "./" + url.parse(req.url).pathname;
         // 输出请求的文件名
         console.log("Request for " + filePath + " received.");
    }

    fs.exists(filePath,function(err){
        if(!err){
            send404(res);
        }else{
            var ext = path.extname(filePath);
            ext = ext?ext.slice(1) : 'unknown';
            var contentType = MIME_TYPE[ext] || "text/plain";
            fs.readFile(filePath,function(err,data){
                if(err){
                    res.end("<h1>500</h1>服务器内部错误！");
                }else{
                    res.writeHead(200,{'content-type':contentType});
                    res.end(data.toString());
                }
            });//fs.readfile
        }
    });//path.exists

}

server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");

function send404(res){
    res.end("<h1>404</h1><p>file not found</p>");
}

