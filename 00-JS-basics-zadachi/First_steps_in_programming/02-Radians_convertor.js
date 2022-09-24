function convertor(input) {
    //градус = радиан * 180 / π
    let radians = Number(input);
    let degrees = radians * 180 / Math.PI;
    console.log(degrees)
}