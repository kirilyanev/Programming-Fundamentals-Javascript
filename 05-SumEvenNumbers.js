// Lector solution with For-of:

// function sumEvenNumbers(numbers) {
//     let evenSum = 0;

//     // Read only, don't modify the array
//     for (let textNumber of numbers) {
//         let number = Number(textNumber);

//         if (number % 2 == 0) {
//             evenSum += number;
//         }
//     }

//     console.log(evenSum);
// }

// My solution

function sumEvenOnly(input) {
    let number = 0;
    let totalSum = 0;
    for (let i = 0; i < input.length; i++) {
        number = Number(input[i]);
        if (number % 2 === 0) {
            totalSum += number;
        }
    }
    console.log(totalSum);
}
sumEvenOnly(['3','5','7','9']);