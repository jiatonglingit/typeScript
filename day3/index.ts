class person {
    name: string;
    age: number;
    sex: string;
    heth: number
    constructor(name, age, sex, heth) {
        this.name = name
        this.age = age
        this.sex = sex
        this.heth = heth
    }
    Addage(num: number) {
        return this.age += num
    }
}
let p = new person("jtl", 22, '男', 182)
console.log("我叫" + p.name + ",今年" + p.age + ",性别" + p.sex + ",身高" + p.heth);
console.log(p.Addage(1));



class xmperson extends person {
    xmChildren() {
        console.log(super.Addage(22));
        console.log("我叫小明");
    }
}
let xm = new xmperson("xm", 22, '男', 182);
xm.xmChildren()