/**
 * 测试访问地址：http://localhost:3000/deleteUser
 * 注意配置 node_path :  C:\Users\Administrator\AppData\Roaming\npm\node_modules
 */

var express = require('express');
var app = express();
var fs = require("fs");
var id = 2;

app.get('/deleteUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
});

var server = app.listen(3000, function () {

  console.log("应用实例，访问地址为 http://localhost:3000/deleteUser");

});