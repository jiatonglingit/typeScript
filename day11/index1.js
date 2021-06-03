function drivate(x, y, str) {
    if (typeof x === "number") {
        console.log(x / y);
    }
    if (typeof x === "string") {
        console.log(x.substring(0, y), x.substring(y));
    }
}
// drivate(10, 2, "dasdada");
drivate(22, 2);
drivate("dsadasda", 2);
