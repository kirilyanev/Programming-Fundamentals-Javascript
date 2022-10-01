function rotate(input,rotations) {
    let numberToMove = input[0];
    let array = input;
    let rotationTimes = rotations % array.length;
        for (let i = 0; i < rotationTimes; i++) {
            numberToMove = array.shift();
            array.push(numberToMove);
        }
        console.log(array.join(' '));
}
rotate([2, 4, 15, 31], 5);