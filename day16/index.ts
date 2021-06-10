//延展操作符 把数组中的每一项统一展开
function elements(x: number, y: number, z: number) {
  console.log(x, y, z);
}
let res1: number[] = [222, 333, 444]
//1.
// elements.apply(null, res1)
// elements.apply(void 0, res1)

//2.类型断言
let res2: number[] = [11, 22, 33];
(<any>elements)(...res2)

//3.
function foo(...x: number[]): void {
  console.log(x);
}
foo(11, 22, 33, 44, 55)

//4.方法重载
function elements1(...x: number[]): void
function elements1(x: number, y: number, z: number) {
  console.log(x, y, z);
}

elements1(111, 11, 22, 22)