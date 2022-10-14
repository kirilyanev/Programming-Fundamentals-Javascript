// First solution with switch:

// function calculator(numOne, numTwo, operator) {
//     switch (operator) {
//         case 'multiply':
//             console.log(numOne * numTwo);
//             break;
//         case 'divide':
//             console.log(numOne / numTwo);
//             break;
//         case 'add':
//             console.log(numOne + numTwo);
//             break;
//         case 'subtract':
//             console.log(numOne - numTwo);
//             break;
//     }
// }
// calculator(5, 5, 'multiply');

// Second solution without switch:

function calculator(numberOne, numberTwo, operator) {

    function checkOperator(numOne, numTwo, calcOperator) {
        let operator = calcOperator;
        let multiply = numOne * numTwo;
        let divide = numOne / numTwo;
        let add = numOne + numTwo;
        let subtract = numOne - numTwo;
        let operatorTypes = [multiply, divide, add, subtract];
        let operatorStrings = ['multiply', 'divide', 'add', 'subtract'];

        for (let i = 0; i < operatorStrings.length; i++) {
            let currentOperation = operatorStrings[i] == operator;
            while (currentOperation == true) {
                currentOperation = false;
                return operatorTypes[i];
            }
        }
    }
    let result = checkOperator(numberOne, numberTwo, operator);
    console.log(result);
}
calculator(5, 5, 'multiply');