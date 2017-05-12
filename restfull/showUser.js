/**
 * 测试访问地址：http://localhost:3000/3
 * 注意配置 node_path :  C:\Users\Administrator\AppData\Roaming\npm\node_modules
 */

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
   // 首先我们读取已存在的用户
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var user = data["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
});

var server = app.listen(3000, function () {

  console.log("应用实例，访问地址为 http://localhost:3000/3");

});