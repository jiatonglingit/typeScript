var PERSON;
(function (PERSON) {
    PERSON[PERSON["xiaoming"] = 0] = "xiaoming";
    PERSON[PERSON["xiaoqiang"] = 1] = "xiaoqiang";
    PERSON[PERSON["xiaohong"] = 2] = "xiaohong";
    PERSON[PERSON["xiaojun"] = 3] = "xiaojun";
    PERSON[PERSON["jialin"] = 4] = "jialin";
})(PERSON || (PERSON = {}));
var name1 = PERSON.jialin;
console.log(name1);
console.log(PERSON[4]);
var person = /** @class */ (function () {
    function person() {
        this.name = "xiaoming";
    }
    return person;
}());
var px = new person();
px.name = "xiaoming";
