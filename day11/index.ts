class Person {
  private name: string
  private age: number
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  get _name() {
    return this.name
  }
  set _name(name) {
    this.name = name
  }
}
let p1: Person = new Person("jjjj", 22)
console.log(p1._name);
p1._name = "dsada"
console.log(p1._name);


function test(cb: () => string) {
  return test(cb)
}
console.log(test(() => "string"));

