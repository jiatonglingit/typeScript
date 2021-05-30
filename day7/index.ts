//定义接口
//传过来的参数必须包含接口定义的属性和方法
interface named {
  //属性
  name: string
  //方法
  //没有方法体 
  //在具体的对象中实现方法体
  print(name: string): void;
}
interface aged {
  //属性
  age: number
}

//对象
let xiaojia = {
  name: '贾统林',
  age: 22,
  print(name: string) {
    console.log(name);
  }
}
let jack = {
  name: '杰克',
  age: 24,
  print: (name) => {
    console.log(name);
  }
}
//函数
const sayName = (obj: named) => {
  console.log(obj.name);
}
const sayAge = (obj: aged) => {
  console.log(obj.age);
}
const yourName = (obj: named) => {
  obj.print(obj.name)
}
//调用
sayName(xiaojia)
sayAge(xiaojia)
yourName(xiaojia)
yourName(jack)
