class Car {
  star() {
    console.log("stating");
  }
}
class Bike {
  ride() {
    console.log("ride");
  }
}
function showB(val: Car | Bike): void {
  if (val instanceof Car) {
    val.star()
  }
  else {
    val.ride()
  }
}
// showB(new Car)
// showB(new Bike)

function showC(x?: number | null) {
  if (x === null) {
    console.log("x is null");

  }
  else if (x === undefined) {
    console.log("x is undefined");

  }
  else {
    console.log("x is number");

  }
}
let [x, y, z] = [1, , null]
showC(x)
showC(y)
showC(z)