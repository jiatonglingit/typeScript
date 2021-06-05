var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.star = function () {
        console.log("stating");
    };
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.ride = function () {
        console.log("ride");
    };
    return Bike;
}());
function showB(val) {
    if (val instanceof Car) {
        val.star();
    }
    else {
        val.ride();
    }
}
// showB(new Car)
// showB(new Bike)
function showC(x) {
    if (x === null) {
        console.log("x is null");
    }
    else if (x === undefined) {
        console.log("x is undefined");
    }
    else {
        console.log("x is number");
    }
}
var _a = [1, , null], x = _a[0], y = _a[1], z = _a[2];
showC(x);
showC(y);
showC(z);
