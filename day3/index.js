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
var person = /** @class */ (function () {
    function person(name, age, sex, heth) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.heth = heth;
    }
    person.prototype.Addage = function (num) {
        return this.age += num;
    };
    return person;
}());
var p = new person("jtl", 22, '男', 182);
console.log("我叫" + p.name + ",今年" + p.age + ",性别" + p.sex + ",身高" + p.heth);
console.log(p.Addage(1));
var xmperson = /** @class */ (function (_super) {
    __extends(xmperson, _super);
    function xmperson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    xmperson.prototype.xmChildren = function () {
        console.log(_super.prototype.Addage.call(this, 22));
        console.log("我叫小明");
    };
    return xmperson;
}(person));
var xm = new xmperson("xm", 22, '男', 182);
xm.xmChildren();
