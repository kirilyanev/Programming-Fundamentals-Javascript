function findNumbers(input,magicSum) {
    let arrayLength = input.length;
    let magicArray = [];
    let isThird = 1;

    for (let i = 0; i < arrayLength; i++) {
        let currentDigit = input[i];
        for (let k = i + 1; k < arrayLength; k++) {
            let nextDigit = input[k];
            if (currentDigit + nextDigit === magicSum) {
                magicArray.push(currentDigit);
                magicArray.push(nextDigit);
            }
        }
    }
    let magicArrayLength = magicArray.length;
    let printResult = '';
    for (let d = 0; d < magicArrayLength; d++) {
        if (isThird < 3) {
            printResult += `${magicArray[d]} `;
            isThird += 1;
        }
        else if (isThird === 3) {
            printResult += `\n`;
            printResult += `${magicArray[d]} `
            isThird = 2;
        }
    }
    console.log(printResult);
}
findNumbers([1, 2, 3, 4, 5, 6],6);