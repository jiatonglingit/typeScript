//接口继承类 可以不用实现里面的属性和方法
//也可以定义自己的方法和属性
class computer {
  private width: number
  private height: number
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  display() {
    console.log("计算机的宽度为:" + `${this.width}` + "长度为:" + `${this.height}`);
  }
}
interface widthed extends computer {
  showWidth(): void

}
class computered extends computer implements widthed {
  showWidth() {
    console.log("展示接口的方法");

  }
}
let com = new computered(66, 88)
console.log(com);
com.display();
com.showWidth();


interface stats1 {
  [index: string]: boolean
}
let s1: stats1 = { '11': true, "xx": false }
console.log(s1);



