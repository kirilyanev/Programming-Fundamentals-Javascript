function solve(numbers) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }
    let result = evenSum - oddSum;
    console.log(result);
}
solve([3,5,7,9]);