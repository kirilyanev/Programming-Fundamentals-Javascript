//First solution(not perfect) - 85/100 in softuni judge

// function rotate(input,rotations) {
//     let newArray = [];
//     let currentArray = input;
//     let firstNum = 0;
//     let r = 1;
//     while (r <= rotations) {
//         for (let i = 1; i < input.length; i++) {
//             firstNum = currentArray[0];
//             let currentNum = currentArray[i];
//             newArray.push(currentNum);
//         }
//         newArray.push(firstNum);
//         currentArray = newArray;
//         newArray = [];
//         r++;
//     }
//     console.log(currentArray.join(' '));
// }
// rotate([2, 4], 1);

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