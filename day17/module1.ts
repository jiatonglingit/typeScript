//泛型<T extends X> 类型限定
//1.导出
//export ...
//导入
//import {xxx,xxx} from 'xxx'
//2.导出
// export default 文件中只能存在一个
// import xxx from 'xxx'

export default interface Shape {
  draw(): void
}
export function drawShaps<T extends Shape>(shape: T): T {
  shape.draw()
  return shape
}
