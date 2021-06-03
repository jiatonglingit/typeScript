//函数重载
//函数名相同 参数不同
function drivate(x: number, y: number,): number;
function drivate(str: string, y: number): string[];

function drivate(x: any, y: number, str?: string): any {
  if (typeof x === "number") {
    console.log(x / y);
  }
  if (typeof x === "string") {
    console.log(x.substring(0, y), x.substring(y));
  }
}
// drivate(10, 2, "dasdada");
drivate(22, 2)
drivate("dsadasda", 2)