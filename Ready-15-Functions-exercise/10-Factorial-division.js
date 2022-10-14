// function factorialDivision(numOne, numTwo) {
//     function factorial(number) {
//         let factorialNum = number;
//         for (let i = 1; i < number; i++) {
//             // x * (x - 1) * (x - 2)
//             factorialNum *= number - i;
//         }
//         return factorialNum;
//     }

//     let result = factorial(numOne) / factorial(numTwo);
//     console.log(result.toFixed(2));
// }
// factorialDivision(0, 1);


// Using while loop 

// function factorialize(num) {
//     let result = num;
//     if (num === 0 || num === 1) 
//       return 1; 
//     while (num > 1) { 
//       num--;
//       result *= num;
//     }
//     return result;
//   }
//   factorialize(5);


// Using recursive function
function divideFactorial(numberOne, numberTwo) {

    function factorialize(number) {
        if (number < 0) {
            return -1;
        } else if (number == 0) {
            return 1;
        } else {
            return (number * factorialize(number - 1));
        }
    }

    let result = factorialize(numberOne) / factorialize(numberTwo);
    console.log(result.toFixed(2));
}
divideFactorial(5,2);