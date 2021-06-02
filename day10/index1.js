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
//抽象类不能被实例化
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.display = function () {
        console.log(this.name);
    };
    return person;
}());
var pacdic = /** @class */ (function (_super) {
    __extends(pacdic, _super);
    function pacdic(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    pacdic.prototype.find = function () {
        console.log("子类实现了抽象类的方法");
    };
    return pacdic;
}(person));
var p1 = new pacdic("jtl", 22);
p1.display();
p1.find();
