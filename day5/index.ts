enum PERSON{
    xiaoming,xiaoqiang,xiaohong,jialin,inde
}
let name1:PERSON=PERSON.jialin;
console.log(name1);
console.log(PERSON[4]);

class person{
    readonly name :string ="xiaoming"

}
let px=new person()
// px.name="xiaoming"