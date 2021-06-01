//接口继承
//一个类不能继承多个类 但可以实现多个接口
interface named {
  name: string
}
interface aged {
  age: number
}
class person1 {
  name: string
  age: number
  sex: string
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
}
class perosn2 extends person1 implements named, aged {
  constructor(name, age, sex) {
    super(name, age, sex)
  }
  name: string;
  age: number;

}
let pp = new perosn2("贾统林", 22, "男")
console.log(pp.name + "," + pp.age + "," + pp.sex);
