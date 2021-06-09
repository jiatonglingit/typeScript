interface utils<T> {
  add(items: T)
  remove(items: T)
  show()
}
class contents<T> implements utils<T>{
  datas: T[]
  constructor(datas: T[]) {
    this.datas = datas
  }
  add(items: T) {
    this.datas.push(items)
  }
  remove(items: T) {
    let index = this.datas.indexOf(items)
    if (index > -1) {
      this.datas.splice(index, 1)
    }
  }
  show() {
    console.log(this.datas);

  }

}
let cont: contents<string> = new contents<string>(["aaa", "bbb", "ccc"])
cont.add("ddd")
cont.remove("aaa")
cont.show()
let cont1: contents<number> = new contents<number>([111, 222, 333, 444])
cont1.add(111)
cont1.remove(222)
cont1.show()
let cont2: contents<boolean> = new contents<boolean>([true, true, false, false])
cont2.add(true)
cont2.remove(false)
cont2.show()