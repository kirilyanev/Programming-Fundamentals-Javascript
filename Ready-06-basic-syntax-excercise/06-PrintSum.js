function sum(firstNumber,secondNumber) {
    let totalSum = 0;
    let numbers = '';
    for (i = firstNumber; i <= secondNumber; i++){
        totalSum += i;
        numbers += `${i} `;
    }
    console.log(numbers);
    console.log(`Sum: ${totalSum}`);
}