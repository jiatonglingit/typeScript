var xiaoming = /** @class */ (function () {
    function xiaoming(hobay) {
        this.hobay = hobay;
    }
    xiaoming.prototype.showName = function () {
        console.log("my name is : xiaoming");
    };
    return xiaoming;
}());
var xiaoqiang = /** @class */ (function () {
    function xiaoqiang(hobay) {
        this.hobay = hobay;
    }
    xiaoqiang.prototype.showAge = function () {
        console.log("my age is : 22");
    };
    return xiaoqiang;
}());
function person(val) {
    if (val.hobay === "huachuan" && val instanceof xiaoming) {
        val.showName();
    }
    else if (val.hobay === "changge" && val instanceof xiaoqiang) {
        val.showAge();
    }
    else {
        // let throws: never = val
    }
}
person(new xiaoming("huachuan"));
person(new xiaoqiang("changge"));
