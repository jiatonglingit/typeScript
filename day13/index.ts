class xiaoming {
  hobay: string
  constructor(hobay) {
    this.hobay = hobay
  }
  showName() {
    console.log("my name is : xiaoming");
  }
}
class xiaoqiang {
  hobay: string
  constructor(hobay) {
    this.hobay = hobay
  }
  showAge() {
    console.log("my age is : 22");
  }
}
function person(val: xiaoqiang | xiaoming): void {
  if (val.hobay === "huachuan" && val instanceof xiaoming) {
    val.showName()
  } else if (val.hobay === "changge" && val instanceof xiaoqiang) {
    val.showAge()
  } else {
    // let throws: never = val
  }
}

person(new xiaoming("huachuan"))
person(new xiaoqiang("changge"))