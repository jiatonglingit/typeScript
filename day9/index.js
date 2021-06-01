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
var person1 = /** @class */ (function () {
    function person1(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    return person1;
}());
var perosn2 = /** @class */ (function (_super) {
    __extends(perosn2, _super);
    function perosn2(name, age, sex) {
        return _super.call(this, name, age, sex) || this;
    }
    return perosn2;
}(person1));
var pp = new perosn2("贾统林", 22, "男");
console.log(pp.name + "," + pp.age + "," + pp.sex);
