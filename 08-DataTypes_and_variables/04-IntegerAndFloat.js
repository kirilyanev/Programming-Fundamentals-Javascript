// function numbers(numOne,numTwo,numThree) {
//     let sum = numOne + numTwo + numThree;
//     let numType = sum % 1
//     if (numType === 0) {
//         console.log(`${sum} - Integer`)
//     } else if (numType != 0) {
//         console.log(`${sum} - Float`)
//     }
// }


//second solution with ternary operator !!!
function numbers(numOne,numTwo,numThree) {
    let sum = numOne + numTwo + numThree;

    let type = Number.isInteger(sum) ? 'Integer' : 'Float';
    console.log(`${sum} - ${type}`)
}
numbers(100, 200, 303);