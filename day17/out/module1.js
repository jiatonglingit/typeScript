"use strict";
//泛型<T extends X> 类型限定
//1.导出
//export ...
//导入
//import {xxx,xxx} from 'xxx'
//2.导出
// export default 文件中只能存在一个
// import xxx from 'xxx'
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawShaps = void 0;
function drawShaps(shape) {
    shape.draw();
    return shape;
}
exports.drawShaps = drawShaps;
