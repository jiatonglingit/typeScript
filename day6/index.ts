//定义接口
interface named {
  //属性
  name: string
}
interface aged {
  //属性
  age: number
}

//对象
let xiaojia = {
  name: '贾统林',
  age: 22
}

//函数
const sayName = (obj: named) => {
  console.log(obj.name);
}
const sayAge = (obj: aged) => {
  console.log(obj.age);
}
//调用
sayName(xiaojia)
sayAge(xiaojia)