//泛型在接口中的应用
//1.
interface elements<S, N> {
  name: S
  age: N
}
let checkE: elements<string, number> = {
  name: "jtl",
  age: 22
}
console.log(checkE);


//2.
interface pullE {
  //函数
  <T>(items: T[], end: T): boolean
}
function checkPul<T>(items: T[], end: T): boolean {
  let indexofE = items.indexOf(end)
  if (indexofE > -1) {
    console.log(end);
    return true
  } else {
    console.log("throw now is find");

    return false
  }
}
let testE: pullE = checkPul
let items = [111, 222, 333, 444, 555]
testE(items, 21)


//3.
interface paris<S, N> {
  sinlg: S
  nolg: N
}

interface parents<S, N> {
  [state: string]: paris<S, N>
}

let res1: parents<string, number> = {
  "first": { sinlg: "111", nolg: 222 }, "dsada": { sinlg: "222", nolg: 222 }
}
console.log(res1);
