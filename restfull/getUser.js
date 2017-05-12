/**
 * 测试访问地址：http://localhost:3000/listUsers
 * 注意配置 node_path :  C:\Users\Administrator\AppData\Roaming\npm\node_modules
 */

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

var server = app.listen(3000, function () {

  console.log("应用实例，访问地址为 http://localhost:3000/listUsers");

});