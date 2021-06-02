//抽象类不能被实例化
abstract class person {
  name: string
  constructor(name) {
    this.name = name
  }
  display() {
    console.log(this.name);

  }
  abstract find(): void
}

class pacdic extends person {
  age: number
  constructor(name, age) {
    super(name)
    this.age = age
  }
  find(): void {
    console.log("子类实现了抽象类的方法");
  }
}
let p1: pacdic = new pacdic("jtl", 22)
p1.display()
p1.find()