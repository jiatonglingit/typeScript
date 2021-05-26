//对象
var xiaojia = {
    name: "贾统林",
    age: 22,
};
//函数
var sayName = function(obj) {
    console.log(obj.name);
};
var sayAge = function(obj) {
    console.log(obj.age);
};
//调用
sayName(xiaojia);
sayAge(xiaojia);