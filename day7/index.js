//对象
var xiaojia = {
    name: '贾统林',
    age: 22,
    print: function (name) {
        console.log(name);
    }
};
var jack = {
    name: '杰克',
    age: 24,
    print: function (name) {
        console.log(name);
    }
};
//函数
var sayName = function (obj) {
    console.log(obj.name);
};
var sayAge = function (obj) {
    console.log(obj.age);
};
var yourName = function (obj) {
    obj.print(obj.name);
};
//调用
sayName(xiaojia);
sayAge(xiaojia);
yourName(xiaojia);
yourName(jack);
