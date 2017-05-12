/**
 * 获取请求参数
 * 测试访问地址：http://localhost:3000/user?name=杨潘&age=20
 */

var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain',"charset":"utf8"});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("姓名：" + params.name);
    res.write("\n");
    res.write("年龄：" + params.age);
    res.end();
 
}).listen(3000);

