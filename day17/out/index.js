"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//模块化导入导出
var module1_1 = require("./module1");
var lodash = __importStar(require("lodash"));
var res1 = {
    draw: function () {
        console.log("res1");
    }
};
module1_1.drawShaps(res1);
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.draw = function () {
        console.log("car.....");
    };
    return car;
}());
var bike = /** @class */ (function () {
    function bike() {
    }
    bike.prototype.draw = function () {
        console.log("bike.....");
    };
    return bike;
}());
module1_1.drawShaps(new car);
module1_1.drawShaps(new bike);
var a = [1, 23, 44];
console.log(lodash.add(11, 22));
