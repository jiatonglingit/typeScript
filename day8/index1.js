//类型断言
var str = "jiatonglin";
//str 可以是任意类型 编译器也不知道是什么类型
//<string>可以把str断言成string类型  只有字符串才能调用substring的方法
var res = str.substring(0, 3);
console.log(res);
var printStr = function (item) {
    if (item) {
        return item.length;
    }
    else {
        return item.toString().length;
    }
};
console.log(printStr(res));
//对象
// let per = {}
// per.name = "da"
// per.age = 22
var per = {};
per.name = "dasda";
per.age = 33;
var per1 = {
    name: 'dfdsfd',
    age: 22
};
var per2 = {
    name: "da",
    age: 22
};
