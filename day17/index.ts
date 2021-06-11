//模块化导入导出
import Shape, { drawShaps } from './module1'
import * as lodash from 'lodash'
let res1: Shape = {
  draw() {
    console.log("res1");
  }
}
drawShaps(res1)

class car implements Shape {
  draw() {
    console.log("car.....");

  }
}

class bike implements Shape {
  draw() {
    console.log("bike.....");

  }
}
drawShaps(new car)
drawShaps(new bike)
let a = [1, 23, 44]

console.log(lodash.add(11, 22));
