//定义支付接口
interface Pay {
  //因为定义接口实现类中必须实现所有的属性和方法  
  //给属性或者方法中加入?则不需要实现
  name?: string
  age?: number
  post(): void
}
//支付方法
const do_pay = (pay: Pay) => {
  pay.post()
}
//微信支付
class Weipay implements Pay {
  post(): void {
    console.log("调用微信支付");
  }
}
//支付宝支付
class Alipay implements Pay {
  post(): void {
    console.log("调用支付宝支付");
  }
}
let w_pay: Pay = new Weipay()
do_pay(w_pay)
let a_pay: Pay = new Alipay()
do_pay(a_pay)
