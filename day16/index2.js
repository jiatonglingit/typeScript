//keyof的使用
var fn1 = /** @class */ (function () {
    function fn1() {
        this.name = "jtl";
    }
    return fn1;
}());
var y;
y = "name";
function blues(itme, test) {
    console.log(test[itme]);
}
blues("name", new fn1());
