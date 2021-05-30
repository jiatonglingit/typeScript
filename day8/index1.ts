//类型断言
let str: any = "jiatonglin"

//str 可以是任意类型 编译器也不知道是什么类型
//<string>可以把str断言成string类型  只有字符串才能调用substring的方法
let res = (<string>str).substring(0, 3)
console.log(res);

const printStr = (item: string | number): number => {
  if (<string>item) {
    return (<string>item).length
  }
  else {
    return item.toString().length
  }
}
console.log(printStr(res));


//接口定义 
interface Person {
  name: string
  age: number
}
//对象
// let per = {}
// per.name = "da"
// per.age = 22

let per = {} as Person
per.name = "dasda"
per.age = 33

let per1 = <Person>{
  name: 'dfdsfd',
  age: 22
}
let per2: Person = {
  name: "da",
  age: 22
}


