//延展操作符 把数组中的每一项统一展开
function elements(x, y, z) {
    console.log(x, y, z);
}
var res1 = [222, 333, 444];
//1.
// elements.apply(null, res1)
// elements.apply(void 0, res1)
//2.类型断言
var res2 = [11, 22, 33];
elements.apply(void 0, res2);
//3.
function foo() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
foo(11, 22, 33, 44, 55);
function elements1(x, y, z) {
    console.log(x, y, z);
}
elements1(111);
