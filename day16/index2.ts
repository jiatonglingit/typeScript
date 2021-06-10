//keyof的使用
class fn1 {
  name: string = "jtl"
}
let y: keyof fn1
y = "name"


function blues(itme: keyof fn1, test: fn1) {
  console.log(test[itme]);

}
blues("name", new fn1())