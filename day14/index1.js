//<x,y>两个参数类型的泛型使用
//并在对象中使用
var getLists = /** @class */ (function () {
    function getLists(lists) {
        this.lists = lists;
    }
    getLists.prototype.add = function (t) {
        this.lists.push(t);
    };
    getLists.prototype.remove = function (t) {
        var index = this.lists.indexOf(t);
        if (index > -1) {
            this.lists.splice(index, 1);
        }
    };
    getLists.prototype.showList = function () {
        return this.lists;
    };
    return getLists;
}());
var res1 = new getLists([111, 222, 333, 444]);
res1.add(555);
res1.add(666);
res1.remove(555);
console.log(res1.showList());
var getFirSen = /** @class */ (function () {
    function getFirSen(f, s) {
        this.first = f;
        this.second = s;
    }
    Object.defineProperty(getFirSen.prototype, "getFirst", {
        get: function () {
            return this.first;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(getFirSen.prototype, "getSecond", {
        get: function () {
            return this.second;
        },
        enumerable: false,
        configurable: true
    });
    return getFirSen;
}());
var res2 = new getFirSen(true, "no.2");
console.log(res2.getFirst);
console.log(res2.getSecond);
