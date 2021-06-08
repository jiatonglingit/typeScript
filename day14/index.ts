//初始泛型<T>
//解决方法类型单一问题
//<T>:泛型
//T[]：表示任意类型的数组 T:任意类型
function getArrays<T>(items: T[]): T[] {
  return new Array<T>().concat(items)
}
let arr1 = getArrays<number>([100, 200, 400])
let arr2 = getArrays<string>(["hello", "world", "hi"])
arr1.push(222)
arr2.push("!")
console.log(arr1);
console.log(arr2);

