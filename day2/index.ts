//参数传递
const addsum = (a: number, b?: string) => {
    return b ? console.log(a + b) : console.log(a);
};
console.log(addsum(12,"jtl"));

//数组累加fn
let fn = (total, num): number => {
    return total + num;
};
//可选参数传递

//下标位置指定
const addArr = (a: number, ...num: number[]) => {
    return num.reduce(function (total, num) {
        return total + num;
    }, a);
};

//下标位置不指定
// const addArr = (a: number, ...num: number[]) => {
//     return num.reduce(fn)
// }

console.log(addArr(10, 20, 30, 40, 50));





//any类型

const show=(params:any)=>{
    console.log(typeof params);
    if (typeof params ==="number") {
        return `${params} type is number`
    }
    if (typeof params ==="string") {
        return `${params} type is string`
    }
    throw new Error(`nothing is number or string with ${params}`)
}
console.log(show(false));
