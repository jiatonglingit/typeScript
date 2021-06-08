//<x,y>两个参数类型的泛型使用
//并在对象中使用
class getLists<T>{
  private lists: T[]
  constructor(lists: T[]) {
    this.lists = lists
  }
  add(t: T) {
    this.lists.push(t)
  }
  remove(t: T) {
    let index = this.lists.indexOf(t)
    if (index > -1) {
      this.lists.splice(index, 1)
    }
  }
  showList(): T[] {
    return this.lists
  }
}
let res1 = new getLists<number>([111, 222, 333, 444])
res1.add(555)
res1.add(666)
res1.remove(555)
console.log(res1.showList());


class getFirSen<F, S>{
  private first: F
  private second: S
  constructor(f: F, s: S) {
    this.first = f
    this.second = s
  }
  get getFirst(): F {
    return this.first
  }
  get getSecond(): S {
    return this.second
  }
}
let res2 = new getFirSen(true, "no.2")
console.log(res2.getFirst);
console.log(res2.getSecond);

