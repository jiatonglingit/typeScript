type user1 = {
  name: string
  age: number
}
let person = {
  name: 'jtl',
  age: 22
}
const per = (obj: user1) => {
  console.log(obj.name + "," + obj.age)
}
per(person)
//type 和 interface一样
//type 不能重复定义相同的接口
//interface可以重复定义