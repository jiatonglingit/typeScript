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
var Person = /** @class */ (function () {
    function Person(age, name) {
        this.age = age;
        this.name = name;
    }
    Person.valo = function (sex) {
        console.log("this is sex :" + sex);
    };
    Person.prototype.getAge = function () {
        console.log(this.age);
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.sex = "男";
    return Person;
}());
var xiaoming = /** @class */ (function (_super) {
    __extends(xiaoming, _super);
    function xiaoming(age, name) {
        return _super.call(this, age, name) || this;
    }
    xiaoming.prototype.setSuperName = function (name) {
        _super.prototype.setName.call(this, name);
    };
    xiaoming.prototype.getSuperName = function () {
        _super.prototype.getName.call(this);
    };
    xiaoming.prototype.setSuperAge = function (age) {
        _super.prototype.setAge.call(this, age);
    };
    xiaoming.prototype.getSuperAge = function () {
        _super.prototype.getAge.call(this);
    };
    xiaoming.prototype.getStatic = function () {
        return "static person is " + xiaoming.sex;
    };
    xiaoming.prototype.setStaticSex = function (sex) {
        xiaoming.valo(sex);
    };
    return xiaoming;
}(Person));
var xmxx = new xiaoming(22, "22");
xmxx.setSuperName("冰冰");
xmxx.getName();
xmxx.setSuperAge(23);
xmxx.getSuperAge();
console.log(xmxx.getStatic());
xmxx.setStaticSex("女");
