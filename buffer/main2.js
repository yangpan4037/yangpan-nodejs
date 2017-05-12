//创建buffer实例
buf = new Buffer(256);

//buffer写数据
len = buf.write("www.yangpan.com");

console.log("写入字节数 : "+  len);

//读数据
console.log(buf.toString("utf-8",0,15));
