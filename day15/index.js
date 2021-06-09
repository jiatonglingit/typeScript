var checkE = {
    name: "jtl",
    age: 22
};
console.log(checkE);
function checkPul(items, end) {
    var indexofE = items.indexOf(end);
    if (indexofE > -1) {
        console.log(end);
        return true;
    }
    else {
        console.log("throw now is find");
        return false;
    }
}
var testE = checkPul;
var items = [111, 222, 333, 444, 555];
testE(items, 21);
var res1 = {
    "first": { sinlg: "111", nolg: 222 }, "dsada": { sinlg: "222", nolg: 222 }
};
console.log(res1);
