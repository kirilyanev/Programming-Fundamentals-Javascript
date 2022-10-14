// Lector's solution in class:

// function reverse(count, numbers) {
//     // create new array
//     let reversedNumbers = []; // create empty array

//     // take count elements from numbers
//     // reverse the elements
//     for (let i = 0; i < count; i++) {
//         // result[count - 1 - i] = numbers[i];
//         reversedNumbers[i] = numbers[count - 1 - i];
//     }

//     // print for winners :) 
//     let result = '';
//     for (let i = 0; i < reversedNumbers.length; i++) {
//         result += reversedNumbers[i];
//         if (i < reversedNumbers.length - 1) {
//             result += ' ';
//         }
//     }
//     console.log(reversedNumbers);
//     console.log(result);
// }

// My first solution:

// function reversedNum(count,numbers) {
//     let printNumbers = '';
//     for (let i = count; i >= 1; i--) {
//         printNumbers += numbers[i - 1];
//         if (i != 1) {
//             printNumbers += ' ';
//         }
//     }
//     console.log(printNumbers);
// }
// reversedNum(2, [66, 43, 75, 89, 47]);

// My second solution using .push():

function test(count,numbers) {
    let reversedNum = [];
    let printNum = '';
    for (let i = 0; i < count; i++) {
        reversedNum.push(numbers[i]);
    }
    for (let i = reversedNum.length - 1; i >= 0; i--) {
        printNum += reversedNum[i];
        printNum += ' ';
    }
    console.log(printNum);
}