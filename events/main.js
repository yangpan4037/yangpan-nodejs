// 引入 events 模块
var events = require('events');

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
   console.log('事件one触发。。。');
  
   // 触发 two 事件 
   eventEmitter.emit('two');
};

// 绑定 one 事件处理程序
eventEmitter.on('one', connectHandler);
 
// 使用匿名函数绑定 two 事件
eventEmitter.on('two', function(){
   console.log('事件two触发。。。');
});

// 触发 one 事件 
eventEmitter.emit('one');

console.log("程序执行完毕。");