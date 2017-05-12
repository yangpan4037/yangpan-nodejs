//创建buffer实例，指定buffer的长度
var buffer = new Buffer(26);

//循环添加buffer的内容,buffer是一个数组
for (var i = 0 ; i < 26 ; i++) {
  buffer[i] = i + 97;
}

console.log( buffer.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buffer.toString('ascii',0,5));   // 输出: abcde
console.log( buffer.toString('utf8',0,5));    // 输出: abcde
console.log( buffer.toString(undefined,0,5)); // 使用 'utf8' 