//支付方法
var do_pay = function (pay) {
    pay.post();
};
//微信支付
var Weipay = /** @class */ (function () {
    function Weipay() {
    }
    Weipay.prototype.post = function () {
        console.log("调用微信支付");
    };
    return Weipay;
}());
//支付宝支付
var Alipay = /** @class */ (function () {
    function Alipay() {
    }
    Alipay.prototype.post = function () {
        console.log("调用支付宝支付");
    };
    return Alipay;
}());
var w_pay = new Weipay();
do_pay(w_pay);
var a_pay = new Alipay();
do_pay(a_pay);
