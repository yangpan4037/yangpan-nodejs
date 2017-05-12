//使用require指令来载入fs模块
var fs = require("fs");

//通过fs同步读取input.text文件
var data = fs.readFileSync('input.txt');

//打印读取的文件内容
console.log("同步读取文件：" + data.toString());

//异步读取文件
fs.readFile('input.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log("异步读取文件：" + data.toString());
});

console.log("程序执行结束!");