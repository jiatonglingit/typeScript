//泛型<T>
//解决方法类型单一问题
//<T>:泛型
//T[]：表示任意类型的数组 T:任意类型
function getArrays(items) {
    return new Array().concat(items);
}
var arr1 = getArrays([100, 200, 400]);
var arr2 = getArrays(["hello", "world", "hi"]);
arr1.push(222);
arr2.push("!");
console.log(arr1);
console.log(arr2);
