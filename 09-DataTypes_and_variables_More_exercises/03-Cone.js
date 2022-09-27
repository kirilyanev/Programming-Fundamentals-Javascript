function cone(radius,height) {
    let pi = Math.PI;
    let volume =  1/3 * height * pi * (radius * radius);
    let slantHeight = Math.sqrt((radius * radius) + (height * height));
    let area = pi * (radius * radius) + pi * radius * slantHeight;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`)
}
cone(3,5);