function calculator(numOne,operatorString,numTwo) {
    if (operatorString === '+') {
        console.log((numOne + numTwo).toFixed(2));
    } else if (operatorString === '-') {
        console.log((numOne - numTwo).toFixed(2));
    } else if (operatorString === '*') {
        console.log((numOne * numTwo).toFixed(2));
    } else if (operatorString === '/') {
        console.log((numOne / numTwo).toFixed(2));
    }
}
calculator(5,'+',10);