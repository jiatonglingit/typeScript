var contents = /** @class */ (function () {
    function contents(datas) {
        this.datas = datas;
    }
    contents.prototype.add = function (items) {
        this.datas.push(items);
    };
    contents.prototype.remove = function (items) {
        var index = this.datas.indexOf(items);
        if (index > -1) {
            this.datas.splice(index, 1);
        }
    };
    contents.prototype.show = function () {
        console.log(this.datas);
    };
    return contents;
}());
var cont = new contents(["aaa", "bbb", "ccc"]);
cont.add("ddd");
cont.remove("aaa");
cont.show();
var cont1 = new contents([111, 222, 333, 444]);
cont1.add(111);
cont1.remove(222);
cont1.show();
var cont2 = new contents([true, true, false, false]);
cont2.add(true);
cont2.remove(false);
cont2.show();
