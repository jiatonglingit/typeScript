//参数传递
var addsum = function (a, b) {
    return b ? console.log(a + b) : console.log(a);
};
console.log(addsum(12, "jtl"));
//数组累加fn
var fn = function (total, num) {
    return total + num;
};
//可选参数传递
//下标位置指定
var addArr = function (a) {
    var num = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num[_i - 1] = arguments[_i];
    }
    return num.reduce(function (total, num) {
        return total + num;
    }, a);
};
//下标位置不指定
// const addArr = (a: number, ...num: number[]) => {
//     return num.reduce(fn)
// }
console.log(addArr(10, 20, 30, 40, 50));
//any类型
var show = function (params) {
    console.log(typeof params);
    if (typeof params === "number") {
        return params + " type is number";
    }
    if (typeof params === "string") {
        return params + " type is string";
    }
    throw new Error("nothing is number or string with " + params);
};
console.log(show(false));
