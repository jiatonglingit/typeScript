class Person {
  private age: number;
  protected name: string

  protected static sex = "男"
  protected static valo(sex) {
    console.log("this is sex :" + sex);
  }

  protected constructor(age, name) {
    this.age = age
    this.name = name
  }
  getAge() {
    console.log(this.age);

  }
  setAge(age) {
    this.age = age
  }
  getName() {
    console.log(this.name);

  }
  setName(name) {
    this.name = name
  }
}
class xiaoming extends Person {
  constructor(age, name) {
    super(age, name)
  }
  setSuperName(name) {
    super.setName(name)
  }
  getSuperName() {
    super.getName()
  }
  setSuperAge(age) {
    super.setAge(age)
  }
  getSuperAge() {
    super.getAge()
  }
  getStatic() {
    return `static person is ${xiaoming.sex}`
  }
  setStaticSex(sex) {
    xiaoming.valo(sex)
  }
}
let xmxx = new xiaoming(22, "22")
xmxx.setSuperName("冰冰")
xmxx.getName()
xmxx.setSuperAge(23)
xmxx.getSuperAge()
console.log(xmxx.getStatic());
xmxx.setStaticSex("女")

