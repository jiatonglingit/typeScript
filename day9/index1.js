var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//接口继承类 可以不用实现里面的属性和方法
//也可以定义自己的方法和属性
var computer = /** @class */ (function () {
    function computer(width, height) {
        this.width = width;
        this.height = height;
    }
    computer.prototype.display = function () {
        console.log("计算机的宽度为:" + ("" + this.width) + "长度为:" + ("" + this.height));
    };
    return computer;
}());
var computered = /** @class */ (function (_super) {
    __extends(computered, _super);
    function computered() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    computered.prototype.showWidth = function () {
        console.log("展示接口的方法");
    };
    return computered;
}(computer));
var com = new computered(66, 88);
console.log(com);
com.display();
com.showWidth();
var s1 = { '11': true, "xx": false };
console.log(s1);
